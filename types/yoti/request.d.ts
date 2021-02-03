declare namespace YotiRequest {
    /**
     * Build a query string.
     */
    function buildQueryString(queryParams: { [s: string]: string }): string;

    class Payload {
        data: string;
        constructor(data: string);
        /**
         * Get payload as a JSON string.
         */
        getPayloadJSON(): string;
        /**
         * Get payload as a Base64 string.
         */
        getBase64Payload(): string;
        /**
         * Get raw data.
         */
        getRawData(): any;
    }

    class YotiResponse {
        parsedResponse: any;
        statusCode: any;
        receipt: object;
        body: string | Buffer;
        headers: { [s: string]: string };
        constructor(
            parsedResponse: any,
            statusCode: number,
            receipt?: object | null,
            body?: Buffer | string | null,
            headers?: Array<string> | null,
        );
        /**
         * @returns Receipt if available.
         */
        getReceipt(): object | null;
        /**
         * @returns Parsed API response.
         */
        getParsedResponse(): any;
        /**
         * @returns The response body.
         */
        getBody(): Buffer | string | null;
        /**
         * @returns Response status code.
         */
        getStatusCode(): number;
        /**
         * @returns Response headers
         */
        getHeaders(): { [s: string]: string };
    }

    /**
     * Represents a HTTP request message.
     */
    class YotiRequest {
        method: string;
        payload: Payload | null;
        url: string;
        headers: object;
        constructor(method: string, url: string, headers: object, payload?: any);
        getMethod(): string;
        getUrl(): string;
        getPayload(): Payload | null;
        getHeaders(): { [s: string]: string };
        /**
         * Executes the request.
         * @param buffer Return the response as a Buffer.
         */
        execute(buffer?: boolean): Promise<YotiResponse>;
    }

    /**
     * Builds a request.
     */
    class RequestBuilder {
        headers: {};
        queryParams: {};
        baseUrl: string;
        endpoint: string;
        pem: string;
        method: any;
        payload: string;
        /**
         * Set initial properties.
         */
        constructor();
        /**
         * @param baseUrl Base URL without trailing slashes.
         */
        withBaseUrl(baseUrl: string): RequestBuilder;
        /**
         * @param endpoint Endpoint with a single leading slash.
         */
        withEndpoint(endpoint: string): RequestBuilder;
        withPemString(pem: string): RequestBuilder;
        withPemFilePath(filePath: string): RequestBuilder;
        withHeader(name: string, value: string): RequestBuilder;
        withMethod(method: string): RequestBuilder;
        withGet(): RequestBuilder;
        withPost(): RequestBuilder;
        withPayload(payload: string): RequestBuilder;
        withQueryParam(name: string, value: string): RequestBuilder;
        /**
         * Default request headers.
         */
        getDefaultHeaders(
            messageSignature: any,
        ): {
            'X-Yoti-Auth-Digest': string;
            'X-Yoti-SDK': string;
            'X-Yoti-SDK-Version': string;
            Accept: string;
            'Content-Type'?: string;
        };
        build(): YotiRequest;
    }
}
