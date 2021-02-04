// Type definitions for yoti 3.15
// Project: https://github.com/getyoti/yoti-node-sdk#readme
// Definitions by: David <https://github.com/dvprrsh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import Request = require('./request');
import DataTypes = require('./dataType');
import Clients = require('./clients');
import DocScanService = require('./docScanService');

declare namespace Yoti {
    export {};

    export class AmlAddress {
        constructor(...args: any[]);
        getCountryCode(...args: any[]): this;
        getData(...args: any[]): this;
        getPostcode(...args: any[]): this;
        setCountryCode(...args: any[]): this;
        setPostcode(...args: any[]): this;
        toString(...args: any[]): this;
        validateCountryCode(...args: any[]): this;
    }

    export class AmlProfile {
        constructor(...args: any[]);
        getAmlAddress(...args: any[]): this;
        getData(...args: any[]): this;
        getFamilyName(...args: any[]): this;
        getGivenNames(...args: any[]): this;
        getSsn(...args: any[]): this;
        setAmlAddress(...args: any[]): this;
        setFamilyName(...args: any[]): this;
        setGivenNames(...args: any[]): this;
        setSsn(...args: any[]): this;
        toString(...args: any[]): this;
        validateAmlAddress(...args: any[]): this;
    }

    export class Client {
        constructor(...args: any[]);
        createShareUrl(...args: any[]): this;
        getActivityDetails(...args: any[]): this;
        performAmlCheck(...args: any[]): this;
    }

    export class ConstraintsBuilder {
        constructor(...args: any[]);
        build(...args: any[]): any;
        withSourceConstraint(...args: any[]): this;
    }

    export class DynamicPolicyBuilder {
        constructor(...args: any[]);
        build(...args: any[]): any;
        withAgeDerivedAttribute(...args: any[]): this;
        withAgeOver(...args: any[]): this;
        withAgeUnder(...args: any[]): this;
        withDateOfBirth(...args: any[]): this;
        withDocumentDetails(...args: any[]): this;
        withDocumentImages(...args: any[]): this;
        withEmail(...args: any[]): this;
        withFamilyName(...args: any[]): this;
        withFullName(...args: any[]): this;
        withGender(...args: any[]): this;
        withGivenNames(...args: any[]): this;
        withNationality(...args: any[]): this;
        withPhoneNumber(...args: any[]): this;
        withPinAuthentication(...args: any[]): this;
        withPostalAddress(...args: any[]): this;
        withSelfie(...args: any[]): this;
        withSelfieAuthentication(...args: any[]): this;
        withStructuredPostalAddress(...args: any[]): this;
        withWantedAttribute(...args: any[]): this;
        withWantedAttributeByName(...args: any[]): this;
        withWantedAuthType(...args: any[]): this;
        withWantedRememberMe(...args: any[]): this;
    }

    export class DynamicScenarioBuilder {
        constructor(...args: any[]);
        build(...args: any[]): any;
        withCallbackEndpoint(...args: any[]): this;
        withExtension(...args: any[]): this;
        withPolicy(...args: any[]): this;
    }

    export class ExtensionBuilder {
        constructor(...args: any[]);
        build(...args: any[]): any;
        withContent(...args: any[]): this;
        withType(...args: any[]): this;
    }

    export class Payload {
        constructor(...args: any[]);
        getBase64Payload(...args: any[]): this;
        getPayloadJSON(...args: any[]): this;
        getRawData(...args: any[]): this;
    }

    export class SourceConstraintBuilder {
        constructor(...args: any[]);
        build(...args: any[]): any;
        withAnchor(...args: any[]): this;
        withAnchorByValue(...args: any[]): this;
        withDrivingLicence(...args: any[]): this;
        withNationalId(...args: any[]): this;
        withPasscard(...args: any[]): this;
        withPassport(...args: any[]): this;
        withSoftPreference(...args: any[]): this;
    }

    export class ThirdPartyAttributeExtensionBuilder {
        constructor(...args: any[]);
        build(...args: any[]): any;
        withDefinition(...args: any[]): this;
        withDefinitions(...args: any[]): this;
        withExpiryDate(...args: any[]): this;
    }

    export class TransactionalFlowExtensionBuilder {
        constructor(...args: any[]);
        build(...args: any[]): any;
        withContent(...args: any[]): this;
    }

    export class WantedAnchorBuilder {
        constructor(...args: any[]);
        build(...args: any[]): any;
        withSubType(...args: any[]): this;
        withValue(...args: any[]): this;
    }

    export class WantedAttributeBuilder {
        constructor(...args: any[]);
        build(...args: any[]): any;
        withAcceptSelfAsserted(...args: any[]): this;
        withConstraints(...args: any[]): this;
        withDerivation(...args: any[]): this;
        withName(...args: any[]): this;
    }

    export class LocationConstraintExtensionBuilder {
        withLatitude(...args: any[]): this;
        withLongitude(...args: any[]): this;
        withRadius(...args: any[]): this;
        withMaxUncertainty(...args: any[]): this;
        build(): any;
    }

    const DocScanConstants: {
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

    const constants: {
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

    interface Notification {
        session_id: string;
        topic: 'resource_update' | 'task_completion' | 'check_completion' | 'session_completion';
        /**
         * Optional and present only when "topic" is "task_completion"
         */
        task_id?: string;
        /**
         *  Optional and present only when "topic" is "resource_update"
         */
        resource_id?: string;
        /**
         *  Optional and present only when "topic" is "check_completion"
         */
        check_id: string;
    }

    export import DocScanClient = Clients.DocScanClient;
    export import RequestBuilder = Request.RequestBuilder;
    export import YotiDate = DataTypes.YotiDate;

    export import AuthenticityCheckResponse = DocScanService.AuthenticityCheckResponse;
    export import BreakdownResponse = DocScanService.BreakdownResponse;
    export import CheckResponse = DocScanService.CheckResponse;
    export import DetailsResponse = DocScanService.DetailsResponse;
    export import DocumentFieldsResponse = DocScanService.DocumentFieldsResponse;
    export import DocumentIdPhotoResponse = DocScanService.DocumentIdPhotoResponse;
    export import DocumentRestrictionBuilder = DocScanService.DocumentRestrictionBuilder;
    export import DocumentRestrictionsFilterBuilder = DocScanService.DocumentRestrictionsFilterBuilder;
    export import FaceMapResponse = DocScanService.FaceMapResponse;
    export import FaceMatchCheckResponse = DocScanService.FaceMatchCheckResponse;
    export import FileResponse = DocScanService.FileResponse;
    export import FrameResponse = DocScanService.FrameResponse;
    export import GeneratedCheckResponse = DocScanService.GeneratedCheckResponse;
    export import GeneratedMedia = DocScanService.GeneratedMedia;
    export import GeneratedSupplementaryDocumentTextDataCheckResponse = DocScanService.GeneratedSupplementaryDocumentTextDataCheckResponse;
    export import GeneratedTextDataCheckResponse = DocScanService.GeneratedTextDataCheckResponse;
    export import GetMediaResponse = DocScanService.GetMediaResponse;
    export import GetSessionResult = DocScanService.GetSessionResult;
    export import IdDocumentComparisonCheckResponse = DocScanService.IdDocumentComparisonCheckResponse;
    export import IdDocumentResourceResponse = DocScanService.IdDocumentResourceResponse;
    export import LivenessCheckResponse = DocScanService.LivenessCheckResponse;
    export import LivenessResourceResponse = DocScanService.LivenessResourceResponse;
    export import MediaResponse = DocScanService.MediaResponse;
    export import NotificationConfigBuilder = DocScanService.NotificationConfigBuilder;
    export import OrthogonalRestrictionsFilterBuilder = DocScanService.OrthogonalRestrictionsFilterBuilder;
    export import PageResponse = DocScanService.PageResponse;
    export import ProofOfAddressObjectiveBuilder = DocScanService.ProofOfAddressObjectiveBuilder;
    export import RecommendationResponse = DocScanService.RecommendationResponse;
    export import ReportResponse = DocScanService.ReportResponse;
    export import RequestedDocumentAuthenticityCheckBuilder = DocScanService.RequestedDocumentAuthenticityCheckBuilder;
    export import RequestedFaceMatchCheckBuilder = DocScanService.RequestedFaceMatchCheckBuilder;
    export import RequestedIdDocumentComparisonCheckBuilder = DocScanService.RequestedIdDocumentComparisonCheckBuilder;
    export import RequestedLivenessCheckBuilder = DocScanService.RequestedLivenessCheckBuilder;
    export import RequestedSupplementaryDocTextExtractionTaskBuilder = DocScanService.RequestedSupplementaryDocTextExtractionTaskBuilder;
    export import RequestedTextExtractionTaskBuilder = DocScanService.RequestedTextExtractionTaskBuilder;
    export import RequestedThirdPartyIdentityCheckBuilder = DocScanService.RequestedThirdPartyIdentityCheckBuilder;
    export import RequiredIdDocumentBuilder = DocScanService.RequiredIdDocumentBuilder;
    export import RequiredSupplementaryDocumentBuilder = DocScanService.RequiredSupplementaryDocumentBuilder;
    export import ResourceContainer = DocScanService.ResourceContainer;
    export import ResourceResponse = DocScanService.ResourceResponse;
    export import SdkConfigBuilder = DocScanService.SdkConfigBuilder;
    export import SessionSpecificationBuilder = DocScanService.SessionSpecificationBuilder;
    export import SupplementaryDocumentResourceResponse = DocScanService.SupplementaryDocumentResourceResponse;
    export import SupplementaryDocumentTextDataCheckResponse = DocScanService.SupplementaryDocumentTextDataCheckResponse;
    export import SupplementaryDocumentTextExtractionTaskResponse = DocScanService.SupplementaryDocumentTextExtractionTaskResponse;
    export import SupportedDocumentsResponse = DocScanService.SupportedDocumentsResponse;
    export import TaskResponse = DocScanService.TaskResponse;
    export import TextDataCheckResponse = DocScanService.TextDataCheckResponse;
    export import TextExtractionTaskResponse = DocScanService.TextExtractionTaskResponse;
    export import ThirdPartyIdentityCheckResponse = DocScanService.ThirdPartyIdentityCheckResponse;
    export import ZoomLivenessResourceResponse = DocScanService.ZoomLivenessResourceResponse;
}

export = Yoti;
