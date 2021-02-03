import { YotiDate } from '../../dataType';

declare namespace YotiRetrieve {
    class GeneratedMedia {
        id: string;
        type: string;
        constructor(media: { id: string; type: string });
        getId(): string;
        getType(): string;
    }

    class RecommendationResponse {
        value: string;
        reason: string;
        recoverySuggestion: string;
        constructor(recommendation: { value: string; reason: string; recovery_suggestion: string });
        getValue(): string;
        getReason(): string;
        getRecoverySuggestion(): string;
    }

    class DetailsResponse {
        name: string;
        value: string;
        constructor(details: { name: string; value: string });
        getName(): string;
        getValue(): string;
    }

    class BreakdownResponse {
        subCheck: string;
        result: string;
        details?: DetailsResponse[];
        constructor(breakdown: { sub_check: string; result: string; details: object[] });
        getSubCheck(): string;
        getResult(): string;
        getDetails(): DetailsResponse[];
    }

    class ReportResponse {
        recommendation?: RecommendationResponse;
        breakdown?: BreakdownResponse[];
        constructor(report: {
            recommendation: { value: string; reason: string; recovery_suggestion: string };
            breakdown: any[];
        });
        getRecommendation(): RecommendationResponse;
        getBreakdown(): BreakdownResponse[];
    }

    class CheckResponse {
        type: string;
        id: string;
        state: string;
        resourcesUsed?: string[];
        generatedMedia?: GeneratedMedia[];
        report: ReportResponse;
        created: YotiDate;
        lastUpdated: YotiDate;
        constructor(check: {
            type: string;
            id: string;
            state: string;
            resources_used: string[];
            generated_media: any[];
            report: {
                recommendation: { value: string; reason: string; recovery_suggestion: string };
                breakdown: any[];
            };
            created: string;
            last_updated: string;
        });
        getType(): string;
        getId(): string;
        getState(): string;
        getResourcesUsed(): string[];
        getGeneratedMedia(): GeneratedMedia[];
        getReport(): ReportResponse;
        getCreated(): YotiDate;
        getLastUpdated(): YotiDate;
    }

    class AuthenticityCheckResponse extends CheckResponse {}

    class IdDocumentComparisonCheckResponse extends CheckResponse {}

    class ThirdPartyIdentityCheckResponse extends CheckResponse {}

    class FaceMatchCheckResponse extends CheckResponse {}

    class TextDataCheckResponse extends CheckResponse {}

    class SupplementaryDocumentTextDataCheckResponse extends CheckResponse {}

    class LivenessCheckResponse extends CheckResponse {}

    class GeneratedCheckResponse {
        id: string;
        type: string;
        constructor(check: { id: string; type: string });
        getId(): string;
        getType(): string;
    }

    class GeneratedTextDataCheckResponse extends GeneratedCheckResponse {}

    class GeneratedSupplementaryDocumentTextDataCheckResponse extends GeneratedCheckResponse {}

    class TaskResponse {
        type: string;
        id: string;
        state: string;
        created?: YotiDate;
        lastUpdated?: YotiDate;
        generatedChecks: GeneratedCheckResponse[];
        generatedMedia: GeneratedMedia[];
        constructor(task: {
            type: string;
            id: string;
            state: string;
            created: string;
            last_updated: string;
            generated_checks: any[];
            generated_media: any[];
        });
        getType(): string;
        getId(): string;
        getState(): string;
        getCreated(): YotiDate;
        getLastUpdated(): YotiDate;
        getGeneratedChecks(): GeneratedCheckResponse[];
        /**
         * @deprecated this method is now implemented on subclasses.
         */
        getGeneratedTextDataChecks(): GeneratedTextDataCheckResponse[];
        getGeneratedMedia(): GeneratedMedia[];
    }

    class TextExtractionTaskResponse extends TaskResponse {
        getGeneratedTextDataChecks(): GeneratedTextDataCheckResponse[];
    }

    class SupplementaryDocumentTextExtractionTaskResponse extends TaskResponse {
        getGeneratedTextDataChecks(): GeneratedSupplementaryDocumentTextDataCheckResponse[];
    }

    class ResourceResponse {
        id: string;
        tasks: TaskResponse[];
        constructor(resource: { id: string; tasks: any[] });
        getTasks(): TaskResponse[];
        getId(): string;
    }

    class MediaResponse {
        id: string;
        type: string;
        created?: YotiDate;
        lastUpdated?: YotiDate;
        constructor(media: { id: string; type: string; created: string; last_updated: string });
        getId(): string;
        getType(): string;
        getCreated(): YotiDate | undefined;
        getLastUpdated(): YotiDate | undefined;
    }

    class GetMediaResponse {
        media?: MediaResponse;
        constructor(...args: any[]);
        getMedia(): MediaResponse | undefined;
    }

    class FrameResponse extends GetMediaResponse {
        constructor(frame: { media: { id: string; type: string; created: string; last_updated: string } });
    }

    class PageResponse {
        captureMethod: string;
        media?: MediaResponse;
        frames: FrameResponse[];
        constructor(page: {
            capture_method: string;
            media: { id: string; type: string; created: string; last_updated: string };
            frames: any[];
        });
        getCaptureMethod(): string;
        getMedia(): MediaResponse;
        getFrames(): FrameResponse[];
    }

    class DocumentFieldsResponse extends GetMediaResponse {
        constructor(documentFields: { media: { id: string; type: string; created: string; last_updated: string } });
    }

    class DocumentIdPhotoResponse extends GetMediaResponse {
        constructor(documentFields: { media: { id: string; type: string; created: string; last_updated: string } });
    }

    class IdDocumentResourceResponse extends ResourceResponse {
        documentType: string;
        issuingCountry: string;
        pages: PageResponse[];
        documentFields?: DocumentFieldsResponse;
        documentIdPhoto?: DocumentIdPhotoResponse;
        constructor(resource: {
            document_type?: any;
            issuing_country?: any;
            pages?: any;
            document_fields?: any;
            document_id_photo?: any;
            id?: string;
            tasks?: any[];
        });
        getDocumentType(): string;
        getIssuingCountry(): string;
        getPages(): PageResponse[];
        getDocumentFields(): DocumentFieldsResponse | undefined;
        getDocumentIdPhoto(): DocumentIdPhotoResponse | undefined;
        getTextExtractionTasks(): TextExtractionTaskResponse[];
    }

    class FileResponse extends GetMediaResponse {
        constructor(file: { media: { id: string; type: string; created: string; last_updated: string } });
    }

    class SupplementaryDocumentResourceResponse extends ResourceResponse {
        documentType: string;
        issuingCountry: string;
        pages: PageResponse[];
        documentFields?: DocumentFieldsResponse;
        file?: FileResponse;
        constructor(resource: {
            document_type?: any;
            issuing_country?: any;
            pages?: any;
            document_fields?: any;
            file?: any;
            id?: string;
            tasks?: any[];
        });
        getTextExtractionTasks(): SupplementaryDocumentTextExtractionTaskResponse[];
        getDocumentType(): string;
        getIssuingCountry(): string;
        getPages(): PageResponse[];
        getDocumentFields(): DocumentFieldsResponse;
        getDocumentFile(): FileResponse;
    }

    class LivenessResourceResponse extends ResourceResponse {
        livenessType: string;
        constructor(resource: { liveness_type?: any; id?: string; tasks?: any[] });
        getLivenessType(): string;
    }

    class FaceMapResponse extends GetMediaResponse {
        constructor(facemap: { media: { id: string; type: string; created: string; last_updated: string } });
    }

    class ZoomLivenessResourceResponse extends LivenessResourceResponse {
        faceMap?: FaceMapResponse;
        frames: FrameResponse[];
        constructor(resource: { facemap?: any; frames?: any; liveness_type?: any; id?: string; tasks?: any[] });
        getFaceMap(): FaceMapResponse;
        getFrames(): FrameResponse[];
    }

    class ResourceContainer {
        idDocuments: IdDocumentResourceResponse[];
        supplementaryDocuments: SupplementaryDocumentResourceResponse[];
        livenessCapture: Array<ZoomLivenessResourceResponse | LivenessResourceResponse>;
        constructor(resources: { id_documents: any[]; supplementary_documents: any[]; liveness_capture: any[] });
        /**
         * Returns ID documents that were uploaded by the user
         *
         * @returns The list of ID documents
         */
        getIdDocuments(): IdDocumentResourceResponse[];
        /**
         * Returns supplementary documents that were uploaded by the user
         *
         * @returns The list of supplementary documents
         */
        getSupplementaryDocuments(): SupplementaryDocumentResourceResponse[];
        /**
         * Returns liveness resources uploaded by the user
         *
         * @returns The list of liveness resources
         */
        getLivenessCapture(): LivenessResourceResponse[];
        /**
         * @returns The list of Zoom liveness resources
         */
        getZoomLivenessResources(): ZoomLivenessResourceResponse[];
    }

    class GetSessionResult {
        clientSessionTokenTtl: number;
        sessionId: string;
        userTrackingId: string;
        state: string;
        clientSessionToken: string;
        checks: CheckResponse[];
        resources?: any;
        biometricConsent?: YotiDate;
        constructor(response: {
            client_session_token_ttl: number;
            session_id: string;
            user_tracking_id: string;
            state: string;
            client_session_token: string;
            checks: any[];
            resources: { id_documents: any[]; supplementary_documents: any[]; liveness_capture: any[] };
            biometric_consent: string;
        });
        getSessionId(): string;
        getClientSessionTokenTtl(): number;
        getState(): string;
        getClientSessionToken(): string;
        getChecks(): CheckResponse[];
        getAuthenticityChecks(): AuthenticityCheckResponse[];
        getFaceMatchChecks(): FaceMatchCheckResponse[];
        getIdDocumentTextDataChecks(): TextDataCheckResponse[];
        /**
         * @deprecated replaced by `getIdDocumentTextDataChecks()`
         */
        getTextDataChecks(): TextDataCheckResponse[];
        getSupplementaryDocumentTextDataChecks(): SupplementaryDocumentTextDataCheckResponse[];
        getLivenessChecks(): LivenessCheckResponse[];
        getIdDocumentComparisonChecks(): IdDocumentComparisonCheckResponse[];
        getThirdPartyIdentityChecks(): ThirdPartyIdentityCheckResponse[];
        getResources(): ResourceContainer | undefined;
        getUserTrackingId(): string;
        getBiometricConsentTimestamp(): YotiDate | undefined;
    }
}

export = YotiRetrieve;
