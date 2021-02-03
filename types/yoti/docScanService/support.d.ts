declare namespace YotiSupport {
    class SupportedDocument {
        type: string;
        constructor(document: { type: string });
        getType(): string;
    }

    class SupportedCountry {
        code: string;
        supportedDocuments: SupportedDocument[];
        constructor(country: { code: string; supported_documents: { type: string }[] });
        getCode(): string;
        getSupportedDocuments(): SupportedDocument[];
    }

    class SupportedDocumentsResponse {
        supportedCountries: SupportedCountry[];
        constructor(response: { supported_countries: { code: string; supported_documents: { type: string }[] }[] });
        getSupportedCountries(): SupportedCountry[];
    }
}

export = YotiSupport;
