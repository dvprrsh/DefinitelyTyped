import { DocScanClient } from 'yoti';
import { IS_DEVELOPMENT, IS_PRODUCTION, NGROK_URL, ORIGIN, YOTI_CLIENT_ID, YOTI_PRIVATE_KEY } from '../../config';
import YotiSandboxController from './yotiSandbox.controller';
import Yoti = require('yoti');

const client = new DocScanClient(YOTI_CLIENT_ID!, YOTI_PRIVATE_KEY!);
client.getSupportedDocuments().then(supportedDocuments => {
    supportedDocuments
        .getSupportedCountries()
        .map((country: any) => console.log({ country: country.getCode(), documents: country.getSupportedDocuments() }));
});

export const createSession = async (applicationId: string) => {
    const ngrokUrl = IS_DEVELOPMENT && NGROK_URL;
    const webhookEndpoint = `${ngrokUrl || ORIGIN}/api/public/yoti`;

    const docAuthCheck = new Yoti.RequestedDocumentAuthenticityCheckBuilder().build();
    const livenessCheck = new Yoti.RequestedLivenessCheckBuilder().forZoomLiveness().withMaxRetries(3).build();
    const faceMatchCheck = new Yoti.RequestedFaceMatchCheckBuilder().withManualCheckFallback().build();
    const firstRequiredDocument = new Yoti.RequiredIdDocumentBuilder().build();
    const proofOfAddressObjective = new Yoti.ProofOfAddressObjectiveBuilder().build();
    const supportingDocument = new Yoti.RequiredSupplementaryDocumentBuilder()
        .withObjective(proofOfAddressObjective)
        .build();

    const textExtractionTask = new Yoti.RequestedTextExtractionTaskBuilder().withManualCheckFallback().build();
    const sdkConfig = new Yoti.SdkConfigBuilder()
        .withAllowsCameraAndUpload()
        .withPrimaryColour('#FFAF28')
        .withSecondaryColour('#000000')
        .withFontColour('#000000')
        .withLocale('en-GB')
        .withPresetIssuingCountry('GBR')
        .build();
    const notificationConfig = new Yoti.NotificationConfigBuilder()
        .withEndpoint(webhookEndpoint)
        .forResourceUpdate()
        .forTaskCompletion()
        .forCheckCompletion()
        .forSessionCompletion()
        .build();

    const sessionSpec = new Yoti.SessionSpecificationBuilder()
        .withClientSessionTokenTtl(600)
        .withResourcesTtl(90000)
        .withUserTrackingId(applicationId)
        .withRequiredDocument(firstRequiredDocument)
        .withRequiredDocument(supportingDocument)
        .withRequestedCheck(docAuthCheck)
        .withRequestedCheck(livenessCheck)
        .withRequestedCheck(faceMatchCheck)
        .withRequestedTask(textExtractionTask)
        .withSdkConfig(sdkConfig)
        .withNotifications(notificationConfig)
        .withBlockBiometricConsent(false)
        .build();

    const session = await client.createSession(sessionSpec);
    if (!IS_PRODUCTION) {
        await YotiSandboxController.configureSessionResponse(session.sessionId);
    }
    return {
        sessionId: session.getSessionId(),
        token: session.getClientSessionToken(),
    };
};

export const getUrlFromSession = (sessionId: string, token: string) =>
    `https://api.yoti.com${
        !IS_PRODUCTION ? '/sandbox' : ''
    }/idverify/v1/web/index.html?sessionID=${sessionId}&sessionToken=${token}`;

export const getSession = async (sessionId: string) => {
    const session = await client.getSession(sessionId);
    const resources = session.getResources();
    console.log(
        JSON.stringify(
            await Promise.all(
                resources.getIdDocuments().map(async (doc: any) => {
                    console.log(doc);
                    const media = await client.getMediaContent(sessionId, doc.getDocumentFields().getMedia().getId());
                    const content = media.getContent();
                    const contentBuffer = content.toBuffer();
                    return JSON.parse(contentBuffer);
                }),
            ),
        ),
    );
    return {
        state: session.getState(),
        resources: session.getResources(),
        checks: session.getChecks(),
    };
};
