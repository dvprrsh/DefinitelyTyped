/// <reference types="node" />

import { DocScanService } from './docScanService';
import { SessionSpecification } from './docScanService/session/create';

declare namespace Yoti {
    class DocScanClient {
        docScanService: DocScanService;
        constructor(sdkId: string, privateKey: string | Buffer);
        createSession(sessionSpec: SessionSpecification): ReturnType<DocScanService['createSession']>;
        getSession(sessionId: string): ReturnType<DocScanService['getSession']>;
        deleteSession(sessionId: string): ReturnType<DocScanService['deleteSession']>;
        getMediaContent(sessionId: string, mediaId: string): ReturnType<DocScanService['getMediaContent']>;
        deleteMediaContent(sessionId: string, mediaId: string): ReturnType<DocScanService['deleteMediaContent']>;
        getSupportedDocuments(): ReturnType<DocScanService['getSupportedDocuments']>;
    }
}

export = Yoti;
