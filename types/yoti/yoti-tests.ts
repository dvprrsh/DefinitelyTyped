import { CheckResponse, DetailsResponse, DocScanClient, GetSessionResult } from 'yoti';
import Yoti = require('yoti');

const client = new DocScanClient('sdkId', 'privateKey');
client.getSupportedDocuments().then(supportedDocuments => {
    supportedDocuments
        .getSupportedCountries()
        .map((country: any) => console.log({ country: country.getCode(), documents: country.getSupportedDocuments() }));
});

export const createSession = async (): Promise<{
    sessionId: string;
    token: string;
}> => {
    const webhookEndpoint = `https://example.com/api/yoti`;

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
        .withUserTrackingId('TEST_ID')
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
    return {
        sessionId: session.getSessionId(),
        token: session.getClientSessionToken(),
    };
};

export const getSession = async (
    sessionId: string,
): Promise<{
    session: GetSessionResult;
    state: string;
    resources?: Yoti.ResourceContainer;
    checks: CheckResponse[];
    applicationId: string;
}> => {
    const session = await client.getSession(sessionId);
    return {
        session,
        state: session.getState(),
        resources: session.getResources(),
        checks: session.getChecks(),
        applicationId: session.userTrackingId,
    };
};

const KEYS: { [key: string]: string } = {
    full_name: 'full_name',
    date_of_birth: 'date_of_birth',
    nationality: 'nationality',
};

export const getInvestorDetails = async (
    sessionId: string,
): Promise<
    | undefined
    | {
          surname?: string;
          forenames?: string;
          dob?: string;
          nationality?: string;
      }
> => {
    const session = await client.getSession(sessionId);
    const allResources = session.getResources();
    if (!allResources) {
        return;
    }
    const idResource: Partial<typeof KEYS> = {};
    for (const resource of allResources.getIdDocuments()) {
        const media = resource.getDocumentFields()?.getMedia();
        if (!media) {
            continue;
        }
        const mediaContent = await client.getMediaContent(sessionId, media.getId());
        const obj: object = JSON.parse(mediaContent.getContent().toBuffer().toString());
        Object.entries(obj).forEach(([key, value]) => {
            if (KEYS[key]) {
                idResource[KEYS[key]] = value;
            }
        });
    }

    const supplementaryResource = {};
    for (const resource of allResources.getSupplementaryDocuments()) {
        const media = resource.getDocumentFields()?.getMedia();
        if (!media) {
            continue;
        }
        const mediaContent = await client.getMediaContent(sessionId, media.getId());
        const obj: object = JSON.parse(mediaContent.getContent().toBuffer().toString());

        Object.entries(obj).forEach(([key, value]) => {
            if (KEYS[key]) {
                idResource[KEYS[key]] = value;
            }
        });
    }
    const splitName = idResource.full_name?.split(' ');
    if (!Object.values(idResource).length && !Object.values(supplementaryResource).length) {
        return;
    }
    return {
        surname: splitName?.pop(),
        forenames: splitName?.join(' '),
        dob: idResource.date_of_birth,
        nationality: idResource.nationality,
    };
};

const getReport = (
    checks: CheckResponse[],
): Array<
    | {
          status: string;
          reason: string;
          suggestion: string;
          breakdown?: Array<{
              check: string;
              result: string;
              details?: DetailsResponse[];
          }>;
      }
    | undefined
> =>
    checks.map(check => {
        const report = check.getReport();
        const recommendation = report.getRecommendation();
        if (!recommendation) {
            return;
        }
        const recValue = recommendation.getValue();
        return {
            status: recValue,
            reason: recommendation.getReason(),
            suggestion: recommendation.getRecoverySuggestion(),
            breakdown: report.getBreakdown()?.map(breakdown => ({
                check: breakdown.getSubCheck(),
                result: breakdown.getResult(),
                details: breakdown.getDetails(),
            })),
        };
    });

export const getSessionResults = async (session: GetSessionResult) => {
    const authReport = getReport(session.getAuthenticityChecks());
    const textDataReport = getReport(session.getIdDocumentTextDataChecks());
    const faceMatchReport = getReport(session.getFaceMatchChecks());
    const livenessReport = getReport(session.getLivenessChecks());

    console.log(JSON.stringify({ authReport, textDataReport, faceMatchReport, livenessReport }));
};
