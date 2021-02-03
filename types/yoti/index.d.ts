// Type definitions for yoti 3.15
// Project: https://github.com/getyoti/yoti-node-sdk#readme
// Definitions by: David <https://github.com/dvprrsh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare namespace Yoti {
    export class AmlAddress {
        constructor(...args: any[]);

        public getCountryCode(...args: any[]): void;

        public getData(...args: any[]): void;

        public getPostcode(...args: any[]): void;

        public setCountryCode(...args: any[]): void;

        public setPostcode(...args: any[]): void;

        public toString(...args: any[]): void;

        public validateCountryCode(...args: any[]): void;
    }

    export class AmlProfile {
        constructor(...args: any[]);

        public getAmlAddress(...args: any[]): void;

        public getData(...args: any[]): void;

        public getFamilyName(...args: any[]): void;

        public getGivenNames(...args: any[]): void;

        public getSsn(...args: any[]): void;

        public setAmlAddress(...args: any[]): void;

        public setFamilyName(...args: any[]): void;

        public setGivenNames(...args: any[]): void;

        public setSsn(...args: any[]): void;

        public toString(...args: any[]): void;

        public static validateAmlAddress(...args: any[]): void;
    }

    export class Client {
        constructor(...args: any[]);

        public createShareUrl(...args: any[]): void;

        public getActivityDetails(...args: any[]): void;

        public performAmlCheck(...args: any[]): void;
    }

    export class ConstraintsBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withSourceConstraint(...args: any[]): void;
    }

    export class DocScanClient {
        constructor(...args: any[]);

        public createSession(...args: any[]): void;

        public deleteMediaContent(...args: any[]): void;

        public deleteSession(...args: any[]): void;

        public getMediaContent(...args: any[]): Media;

        public getSession(...args: any[]): void;

        public getSupportedDocuments(...args: any[]): void;
    }

    export class DocumentRestrictionBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withCountries(...args: any[]): void;

        public withDocumentTypes(...args: any[]): void;
    }

    export class DocumentRestrictionsFilterBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public forBlacklist(...args: any[]): void;

        public forWhitelist(...args: any[]): void;

        public withDocumentRestriction(...args: any[]): void;
    }

    export class DynamicPolicyBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withAgeDerivedAttribute(...args: any[]): void;

        public withAgeOver(...args: any[]): void;

        public withAgeUnder(...args: any[]): void;

        public withDateOfBirth(...args: any[]): void;

        public withDocumentDetails(...args: any[]): void;

        public withDocumentImages(...args: any[]): void;

        public withEmail(...args: any[]): void;

        public withFamilyName(...args: any[]): void;

        public withFullName(...args: any[]): void;

        public withGender(...args: any[]): void;

        public withGivenNames(...args: any[]): void;

        public withNationality(...args: any[]): void;

        public withPhoneNumber(...args: any[]): void;

        public withPinAuthentication(...args: any[]): void;

        public withPostalAddress(...args: any[]): void;

        public withSelfie(...args: any[]): void;

        public withSelfieAuthentication(...args: any[]): void;

        public withStructuredPostalAddress(...args: any[]): void;

        public withWantedAttribute(...args: any[]): void;

        public withWantedAttributeByName(...args: any[]): void;

        public withWantedAuthType(...args: any[]): void;

        public withWantedRememberMe(...args: any[]): void;
    }

    export class DynamicScenarioBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withCallbackEndpoint(...args: any[]): void;

        public withExtension(...args: any[]): void;

        public withPolicy(...args: any[]): void;
    }

    export class ExtensionBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withContent(...args: any[]): void;

        public withType(...args: any[]): void;
    }

    export class LocationConstraintExtensionBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withLatitude(...args: any[]): void;

        public withLongitude(...args: any[]): void;

        public withMaxUncertainty(...args: any[]): void;

        public withRadius(...args: any[]): void;
    }

    export class NotificationConfigBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public forCheckCompletion(...args: any[]): void;

        public forResourceUpdate(...args: any[]): void;

        public forSessionCompletion(...args: any[]): void;

        public forTaskCompletion(...args: any[]): void;

        public withAuthToken(...args: any[]): void;

        public withEndpoint(...args: any[]): void;

        public withTopic(...args: any[]): void;
    }

    export class OrthogonalRestrictionsFilterBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withBlacklistedCountries(...args: any[]): void;

        public withBlacklistedDocumentTypes(...args: any[]): void;

        public withWhitelistedCountries(...args: any[]): void;

        public withWhitelistedDocumentTypes(...args: any[]): void;
    }

    export class Payload {
        constructor(...args: any[]);

        public getBase64Payload(...args: any[]): void;

        public getPayloadJSON(...args: any[]): void;

        public getRawData(...args: any[]): void;
    }

    export class ProofOfAddressObjectiveBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;
    }

    export class RequestBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public getDefaultHeaders(...args: any[]): void;

        public withBaseUrl(...args: any[]): void;

        public withEndpoint(...args: any[]): void;

        public withGet(...args: any[]): void;

        public withHeader(...args: any[]): void;

        public withMethod(...args: any[]): void;

        public withPayload(...args: any[]): void;

        public withPemFilePath(...args: any[]): void;

        public withPemString(...args: any[]): void;

        public withPost(...args: any[]): void;

        public withQueryParam(...args: any[]): void;
    }

    export class RequestedDocumentAuthenticityCheckBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withManualCheckAlways(...args: any[]): void;

        public withManualCheckFallback(...args: any[]): void;

        public withManualCheckNever(...args: any[]): void;
    }

    export class RequestedFaceMatchCheckBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withManualCheckAlways(...args: any[]): void;

        public withManualCheckFallback(...args: any[]): void;

        public withManualCheckNever(...args: any[]): void;
    }

    export class RequestedIdDocumentComparisonCheckBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;
    }

    export class RequestedLivenessCheckBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public forLivenessType(...args: any[]): void;

        public forZoomLiveness(...args: any[]): void;

        public withMaxRetries(...args: any[]): void;
    }

    export class RequestedSupplementaryDocTextExtractionTaskBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withManualCheckAlways(...args: any[]): void;

        public withManualCheckFallback(...args: any[]): void;

        public withManualCheckNever(...args: any[]): void;
    }

    export class RequestedTextExtractionTaskBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withChipDataDesired(...args: any[]): void;

        public withChipDataIgnore(...args: any[]): void;

        public withManualCheckAlways(...args: any[]): void;

        public withManualCheckFallback(...args: any[]): void;

        public withManualCheckNever(...args: any[]): void;
    }

    export class RequestedThirdPartyIdentityCheckBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;
    }

    export class RequiredIdDocumentBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withFilter(...args: any[]): void;
    }

    export class RequiredSupplementaryDocumentBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withCountryCodes(...args: any[]): void;

        public withDocumentTypes(...args: any[]): void;

        public withObjective(...args: any[]): void;
    }

    export class SdkConfigBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withAllowedCaptureMethods(...args: any[]): void;

        public withAllowsCamera(...args: any[]): void;

        public withAllowsCameraAndUpload(...args: any[]): void;

        public withErrorUrl(...args: any[]): void;

        public withFontColour(...args: any[]): void;

        public withLocale(...args: any[]): void;

        public withPresetIssuingCountry(...args: any[]): void;

        public withPrimaryColour(...args: any[]): void;

        public withPrivacyPolicyUrl(...args: any[]): void;

        public withSecondaryColour(...args: any[]): void;

        public withSuccessUrl(...args: any[]): void;
    }

    export class SessionSpecificationBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withBlockBiometricConsent(...args: any[]): void;

        public withClientSessionTokenTtl(...args: any[]): void;

        public withNotifications(...args: any[]): void;

        public withRequestedCheck(...args: any[]): void;

        public withRequestedTask(...args: any[]): void;

        public withRequiredDocument(...args: any[]): void;

        public withResourcesTtl(...args: any[]): void;

        public withSdkConfig(...args: any[]): void;

        public withUserTrackingId(...args: any[]): void;
    }

    export class SourceConstraintBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withAnchor(...args: any[]): void;

        public withAnchorByValue(...args: any[]): void;

        public withDrivingLicence(...args: any[]): void;

        public withNationalId(...args: any[]): void;

        public withPasscard(...args: any[]): void;

        public withPassport(...args: any[]): void;

        public withSoftPreference(...args: any[]): void;
    }

    export class ThirdPartyAttributeExtensionBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withDefinition(...args: any[]): void;

        public withDefinitions(...args: any[]): void;

        public withExpiryDate(...args: any[]): void;
    }

    export class TransactionalFlowExtensionBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withContent(...args: any[]): void;
    }

    export class WantedAnchorBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withSubType(...args: any[]): void;

        public withValue(...args: any[]): void;
    }

    export class WantedAttributeBuilder {
        constructor(...args: any[]);

        public build(...args: any[]): void;

        public withAcceptSelfAsserted(...args: any[]): void;

        public withConstraints(...args: any[]): void;

        public withDerivation(...args: any[]): void;

        public withName(...args: any[]): void;
    }

    export class YotiDate {
        constructor(...args: any[]);

        public getMicrosecondTime(...args: any[]): void;

        public getMicrosecondTimestamp(...args: any[]): void;

        public getMicrosecondUnixTimestamp(...args: any[]): void;

        public getMicroseconds(...args: any[]): void;

        public toISODateString(...args: any[]): void;

        public static UTC(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;

        public static fromDateString(...args: any[]): void;

        public static now(): any;

        public static parse(p0: any): any;
    }

    export const DocScanConstants: {
        ALWAYS: string;
        CAMERA: string;
        CAMERA_AND_UPLOAD: string;
        CHECK_COMPLETION: string;
        DESIRED: string;
        DOCUMENT_RESTRICTIONS: string;
        FALLBACK: string;
        ID_DOCUMENT: string;
        ID_DOCUMENT_AUTHENTICITY: string;
        ID_DOCUMENT_COMPARISON: string;
        ID_DOCUMENT_FACE_MATCH: string;
        ID_DOCUMENT_TEXT_DATA_CHECK: string;
        ID_DOCUMENT_TEXT_DATA_EXTRACTION: string;
        IGNORE: string;
        INCLUSION_BLACKLIST: string;
        INCLUSION_WHITELIST: string;
        LIVENESS: string;
        NEVER: string;
        ORTHOGONAL_RESTRICTIONS: string;
        PROOF_OF_ADDRESS: string;
        RESOURCE_UPDATE: string;
        SESSION_COMPLETION: string;
        SUPPLEMENTARY_DOCUMENT: string;
        SUPPLEMENTARY_DOCUMENT_TEXT_DATA_CHECK: string;
        SUPPLEMENTARY_DOCUMENT_TEXT_DATA_EXTRACTION: string;
        TASK_COMPLETION: string;
        THIRD_PARTY_IDENTITY: string;
        ZOOM: string;
    };

    export const constants: {
        ADDRESS_ATTR: string;
        API_BASE_URL: string;
        ATTR_AGE_OVER: string;
        ATTR_AGE_UNDER: string;
        ATTR_AGE_VERIFIED: string;
        ATTR_APPLICATION_LOGO: string;
        ATTR_APPLICATION_NAME: string;
        ATTR_APPLICATION_RECEIPT_BGCOLOR: string;
        ATTR_APPLICATION_URL: string;
        ATTR_DATE_OF_BIRTH: string;
        ATTR_DOCUMENT_DETAILS: string;
        ATTR_DOCUMENT_IMAGES: string;
        ATTR_EMAIL_ADDRESS: string;
        ATTR_FAMILY_NAME: string;
        ATTR_FULL_NAME: string;
        ATTR_GENDER: string;
        ATTR_GIVEN_NAMES: string;
        ATTR_NATIONALITY: string;
        ATTR_PHONE_NUMBER: string;
        ATTR_POSTAL_ADDRESS: string;
        ATTR_SELFIE: string;
        ATTR_STRUCTURED_POSTAL_ADDRESS: string;
        COUNTRY_ATTR: string;
        FAMILY_NAME_ATTR: string;
        GIVEN_NAMES_ATTR: string;
        ON_FRAUD_LIST_ATTR: string;
        ON_PEP_LIST_ATTR: string;
        ON_WATCH_LIST_ATTR: string;
        POSTCODE_ATTR: string;
        SSN_ATTR: string;
    };

    export interface Notification {
        session_id: string;
        topic: 'resource_update' | 'task_completion' | 'check_completion' | 'session_completion';
        /**
         * @property Optional and present only when "topic" is "task_completion"
         */
        task_id?: string;
        /**
         * @property Optional and present only when "topic" is "resource_update"
         */
        resource_id?: string;
        /**
         * @property Optional and present only when "topic" is "check_completion"
         */
        check_id: string;
    }
}
