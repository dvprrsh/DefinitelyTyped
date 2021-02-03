import { Media } from '../dataType';
import { CreateSessionResult, SessionSpecification } from './session/create';
import { GetSessionResult } from './session/retrieve';
import { SupportedDocumentsResponse } from './support';

declare namespace DocScanService {
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
    class DocScanError extends Error {
        response: ErrorResponse;
        constructor(error: DocScanError);
        getResponseStatusCode(): number | null;
        getResponseBody(): ErrorResponse['body'];
    }

    function sessionPath(sessionId: string): string;

    function mediaContentPath(sessionId: string, mediaId: string): string;

    /**
     * Service built to handle the interactions between the client and Doc Scan APIs
     */
    class DocScanService {
        sdkId: string;
        pem: string | Buffer;
        constructor(sdkId: string, pem: string | Buffer);
        /**
         * Uses the supplied session specification to create a session
         */
        createSession(sessionSpecification: SessionSpecification): Promise<CreateSessionResult>;
        /**
         * Retrieves the current state of a given session
         */
        getSession(sessionId: string): Promise<GetSessionResult | DocScanError>;
        /**
         * Deletes a session and all of its associated content
         */
        deleteSession(sessionId: string): Promise<void | DocScanError>;
        /**
         * Retrieves {@link Media} content for a given session and media ID
         */
        getMediaContent(sessionId: string, mediaId: string): Promise<Media | DocScanError>;
        /**
         * Deletes media content for a given session and media ID
         */
        deleteMediaContent(sessionId: string, mediaId: string): Promise<void | DocScanError>;
        /**
         * Gets a list of supported documents.
         */
        getSupportedDocuments(): Promise<SupportedDocumentsResponse | DocScanError>;
    }
}

export = DocScanService;
