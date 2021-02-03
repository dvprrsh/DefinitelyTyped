/// <reference types="node" />

import { DocScanService } from './docScanService';
import { SessionSpecification } from './docScanService/session/create';

declare namespace Clients {
    class DocScanClient {
        docScanService: DocScanService;
        constructor(sdkId: string, privateKey: string | Buffer);
        createSession(sessionSpec: SessionSpecification): Promise<ReturnType<DocScanService['createSession']>>;
        getSession(sessionId: string): Promise<ReturnType<DocScanService['getSession']>>;
        deleteSession(sessionId: string): Promise<ReturnType<DocScanService['deleteSession']>>;
        getMediaContent(sessionId: string, mediaId: string): Promise<ReturnType<DocScanService['getMediaContent']>>;
        deleteMediaContent(
            sessionId: string,
            mediaId: string,
        ): Promise<ReturnType<DocScanService['deleteMediaContent']>>;
        getSupportedDocuments(): Promise<ReturnType<DocScanService['getSupportedDocuments']>>;
    }
}

export = Clients;
