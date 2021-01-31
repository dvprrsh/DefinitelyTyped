/// <reference types="node" />

declare namespace Clients {
    class DocScanClient {
        docScanService: any;
        constructor(clientId: string, privateKey: string | Buffer);
        createSession(sessionSpec: any): Promise<any>;
        getSession(sessionId: string): Promise<any>;
        deleteSession(sessionId: string): Promise<void>;
        getMediaContent(sessionId: string, mediaId: string): Promise<any>;
        deleteMediaContent(sessionId: string, mediaId: string): Promise<void>;
        getSupportedDocuments(): Promise<any>;
    }
}

export = Clients;
