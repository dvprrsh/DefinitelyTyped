import { Media } from '../dataType';
import { CreateSessionResult, SessionSpecification } from './session/create';
import Create = require('./session/create');
import Retrieve = require('./session/retrieve');
import Support = require('./support');

declare namespace Yoti {
    export {};

    type ErrorResponse = null | {
        statusCode?: number;
        body: {
            code: number;
            message: string;
            errors: { property: any; message: string };
        } & { [key: string]: any };
    };

    // declare function errorMessage(error: DocScanError): string;

    /**
     * Signals that a problem occurred in a Yoti Doc Scan call
     */
    export class DocScanError extends Error {
        response: ErrorResponse;
        constructor(error: DocScanError);
        getResponseStatusCode(): number | null;
        getResponseBody(): NonNullable<ErrorResponse>['body'];
    }

    export function sessionPath(sessionId: string): string;

    export function mediaContentPath(sessionId: string, mediaId: string): string;

    /**
     * Service built to handle the interactions between the client and Doc Scan APIs
     */
    export class DocScanService {
        sdkId: string;
        pem: string | Buffer;
        constructor(sdkId: string, pem: string | Buffer);
        /**
         * Uses the supplied session specification to create a session
         */
        createSession(sessionSpecification: SessionSpecification): Promise<CreateSessionResult>;
        /**
         * Retrieves the current state of a given session
         * @throws {DocScanError}
         */
        getSession(sessionId: string): Promise<GetSessionResult>;
        /**
         * Deletes a session and all of its associated content
         * @throws {DocScanError}
         */
        deleteSession(sessionId: string): Promise<void>;
        /**
         * Retrieves {@link Media} content for a given session and media ID
         * @throws {DocScanError}
         */
        getMediaContent(sessionId: string, mediaId: string): Promise<Media>;
        /**
         * Deletes media content for a given session and media ID
         * @throws {DocScanError}
         */
        deleteMediaContent(sessionId: string, mediaId: string): Promise<void>;
        /**
         * Gets a list of supported documents.
         * @throws {DocScanError}
         */
        getSupportedDocuments(): Promise<SupportedDocumentsResponse>;
    }

    export import AuthenticityCheckResponse = Retrieve.AuthenticityCheckResponse;
    export import BreakdownResponse = Retrieve.BreakdownResponse;
    export import CheckResponse = Retrieve.CheckResponse;
    export import DetailsResponse = Retrieve.DetailsResponse;
    export import DocumentFieldsResponse = Retrieve.DocumentFieldsResponse;
    export import DocumentIdPhotoResponse = Retrieve.DocumentIdPhotoResponse;
    export import DocumentRestrictionBuilder = Create.DocumentRestrictionBuilder;
    export import DocumentRestrictionsFilterBuilder = Create.DocumentRestrictionsFilterBuilder;
    export import FaceMapResponse = Retrieve.FaceMapResponse;
    export import FaceMatchCheckResponse = Retrieve.FaceMatchCheckResponse;
    export import FileResponse = Retrieve.FileResponse;
    export import FrameResponse = Retrieve.FrameResponse;
    export import GeneratedCheckResponse = Retrieve.GeneratedCheckResponse;
    export import GeneratedMedia = Retrieve.GeneratedMedia;
    export import GeneratedSupplementaryDocumentTextDataCheckResponse = Retrieve.GeneratedSupplementaryDocumentTextDataCheckResponse;
    export import GeneratedTextDataCheckResponse = Retrieve.GeneratedTextDataCheckResponse;
    export import GetMediaResponse = Retrieve.GetMediaResponse;
    export import GetSessionResult = Retrieve.GetSessionResult;
    export import IdDocumentComparisonCheckResponse = Retrieve.IdDocumentComparisonCheckResponse;
    export import IdDocumentResourceResponse = Retrieve.IdDocumentResourceResponse;
    export import LivenessCheckResponse = Retrieve.LivenessCheckResponse;
    export import LivenessResourceResponse = Retrieve.LivenessResourceResponse;
    export import MediaResponse = Retrieve.MediaResponse;
    export import NotificationConfigBuilder = Create.NotificationConfigBuilder;
    export import OrthogonalRestrictionsFilterBuilder = Create.OrthogonalRestrictionsFilterBuilder;
    export import PageResponse = Retrieve.PageResponse;
    export import ProofOfAddressObjectiveBuilder = Create.ProofOfAddressObjectiveBuilder;
    export import RecommendationResponse = Retrieve.RecommendationResponse;
    export import ReportResponse = Retrieve.ReportResponse;
    export import RequestedDocumentAuthenticityCheckBuilder = Create.RequestedDocumentAuthenticityCheckBuilder;
    export import RequestedFaceMatchCheckBuilder = Create.RequestedFaceMatchCheckBuilder;
    export import RequestedIdDocumentComparisonCheckBuilder = Create.RequestedIdDocumentComparisonCheckBuilder;
    export import RequestedLivenessCheckBuilder = Create.RequestedLivenessCheckBuilder;
    export import RequestedSupplementaryDocTextExtractionTaskBuilder = Create.RequestedSupplementaryDocTextExtractionTaskBuilder;
    export import RequestedTextExtractionTaskBuilder = Create.RequestedTextExtractionTaskBuilder;
    export import RequestedThirdPartyIdentityCheckBuilder = Create.RequestedThirdPartyIdentityCheckBuilder;
    export import RequiredIdDocumentBuilder = Create.RequiredIdDocumentBuilder;
    export import RequiredSupplementaryDocumentBuilder = Create.RequiredSupplementaryDocumentBuilder;
    export import ResourceContainer = Retrieve.ResourceContainer;
    export import ResourceResponse = Retrieve.ResourceResponse;
    export import SdkConfigBuilder = Create.SdkConfigBuilder;
    export import SessionSpecificationBuilder = Create.SessionSpecificationBuilder;
    export import SupplementaryDocumentResourceResponse = Retrieve.SupplementaryDocumentResourceResponse;
    export import SupplementaryDocumentTextDataCheckResponse = Retrieve.SupplementaryDocumentTextDataCheckResponse;
    export import SupplementaryDocumentTextExtractionTaskResponse = Retrieve.SupplementaryDocumentTextExtractionTaskResponse;
    export import SupportedDocumentsResponse = Support.SupportedDocumentsResponse;
    export import TaskResponse = Retrieve.TaskResponse;
    export import TextDataCheckResponse = Retrieve.TextDataCheckResponse;
    export import TextExtractionTaskResponse = Retrieve.TextExtractionTaskResponse;
    export import ThirdPartyIdentityCheckResponse = Retrieve.ThirdPartyIdentityCheckResponse;
    export import ZoomLivenessResourceResponse = Retrieve.ZoomLivenessResourceResponse;
}

export = Yoti;
