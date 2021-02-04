declare namespace Create {
    /**
     * Configures call-back Notifications to some backend endpoint provided
     * by the Relying Business.
     *
     * Notifications can be configured to notified a client backend of certain
     * events, avoiding the need to poll for the state of the Session.
     */
    class NotificationConfig {
        authToken: string;
        endpoint: string;
        topics?: string[];
        /**
         * @param authToken
         *   The authorization token to be included in call-back messages
         * @param endpoint
         *   The endpoint that notifications should be sent to
         * @param topics
         *   The list of topics that should trigger notifications
         */
        constructor(authToken: string, endpoint: string, topics: string[]);

        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): {
            auth_token: string;
            endpoint: string;
            topics?: string[];
        };
    }

    /**
     * Requests creation of a Check to be performed on a document
     */
    class RequestedCheck {
        type: string;
        config: any;
        /**
         * @param type
         *   The type of the Check to create
         * @param config
         *   The configuration to apply to the Check
         */
        constructor(type: string, config: any);

        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): {
            type: string;
            config: any;
        };
    }

    /**
     * Requests creation of a Task to be performed on each document
     */
    class RequestedTask {
        type: string;
        config: any;
        /**
         * @param type
         *   The type of the Task to create
         * @param config
         *   Configuration to apply to the Task
         */
        constructor(type: string, config: any);

        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): {
            type: string;
            config: any;
        };
    }

    class SdkConfig {
        allowedCaptureMethods: string;
        primaryColour: string;
        secondaryColour: string;
        fontColour: string;
        locale: string;
        presetIssuingCountry: string;
        successUrl: string;
        errorUrl: string;
        privacyPolicyUrl: string;
        /**
         * @param allowedCaptureMethods
         *   The methods allowed for capturing document images
         * @param primaryColour
         *   The primary colour
         * @param secondaryColour
         *   The secondary colour
         * @param fontColour
         *   The font colour
         * @param locale
         *   The locale
         * @param presetIssuingCountry
         *   The preset issuing country
         * @param successUrl
         *   The success URL
         * @param errorUrl
         *   The error URL
         * @param privacyPolicyUrl
         *   The privacy policy URL
         */
        constructor(
            allowedCaptureMethods: string,
            primaryColour: string,
            secondaryColour: string,
            fontColour: string,
            locale: string,
            presetIssuingCountry: string,
            successUrl: string,
            errorUrl: string,
            privacyPolicyUrl: string,
        );

        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): {
            allowedCaptureMethods: string;
            primaryColour: string;
            secondaryColour: string;
            fontColour: string;
            locale: string;
            presetIssuingCountry: string;
            successUrl: string;
            errorUrl: string;
            privacyPolicyUrl: string;
        };
    }

    class RequiredDocument {
        type: string;
        constructor(type: string);
        toJSON(): {
            type: string;
        };
    }

    class SessionSpecification {
        clientSessionTokenTtl: number;
        resourcesTtl: number;
        userTrackingId: string;
        notifications?: NotificationConfig;
        sdkConfig?: SdkConfig;
        requestedChecks: RequestedCheck[];
        requestedTasks: RequestedTask[];
        requiredDocuments?: RequiredDocument[];
        blockBiometricConsent: boolean;
        /**
         * @param clientSessionTokenTtl
         *   Client-session-token time-to-live to apply to the created session
         * @param resourcesTtl
         *   Time-to-live used for all Resources created in the course of the session
         * @param userTrackingId
         *   User tracking id, for the Relying Business to track returning users
         * @param notifications
         *   For configuring call-back messages
         * @param requestedChecks
         *   The Checks to be performed on each Document
         * @param requestedTasks
         *   The Tasks to be performed on each Document
         * @param sdkConfig
         *   The SDK configuration set on the session specification
         * @param requiredDocuments
         *   List of RequiredDocument defining the documents required from the client
         * @param blockBiometricConsent
         *   Sets whether or not to block the collection of biometric consent
         */
        constructor(
            clientSessionTokenTtl: number,
            resourcesTtl: number,
            userTrackingId: string,
            notifications: NotificationConfig,
            requestedChecks: RequestedCheck[],
            requestedTasks: RequestedTask[],
            sdkConfig: SdkConfig,
            requiredDocuments: RequiredDocument[],
            blockBiometricConsent: boolean,
        );

        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): {
            clientSessionTokenTtl: number;
            resourcesTtl: number;
            userTrackingId: string;
            notifications?: NotificationConfig;
            sdkConfig?: SdkConfig;
            requestedChecks: RequestedCheck[];
            requestedTasks: RequestedTask[];
            requiredDocuments?: RequiredDocument[];
            blockBiometricConsent: boolean;
        };
    }

    /**
     * The response to a successful CreateSession call
     */
    class CreateSessionResult {
        clientSessionTokenTtl: number;
        clientSessionToken: string;
        sessionId: string;
        /**
         * @param response
         *   The parsed JSON response.
         */
        constructor(response: { client_session_token_ttl: number; client_session_token: string; session_id: string });
        /**
         * Returns the time-to-live (TTL) for the client session
         * token for the created session
         *
         * @returns the client session token TTL
         */
        getClientSessionTokenTtl(): number;
        /**
         * Returns the client session token for the created session
         *
         * @returns the client session token
         */
        getClientSessionToken(): string;
        /**
         * Session ID of the created session
         *
         * @returns the session id
         */
        getSessionId(): string;
    }

    class BaseCheckBuilder {
        manualCheck: string;
        /**
         * Requires that a manual follow-up check is always performed
         */
        withManualCheckAlways(): this;
        /**
         * Requires that a manual follow-up check is performed only on failed Checks,
         * and those with a low level of confidence
         */
        withManualCheckFallback(): this;
        /**
         * Requires that only an automated Check is performed.  No manual follow-up
         * Check will ever be initiated
         */
        withManualCheckNever(): this;
    }

    /**
     * The configuration applied when creating a DocumentAuthenticityCheck
     */
    class RequestedDocumentAuthenticityConfig {
        manualCheck: string;
        constructor(manualCheck: string);
        toJSON(): {
            manual_check: string;
        };
    }

    /**
     * Requests creation of a DocumentAuthenticityCheck
     */
    class RequestedDocumentAuthenticityCheck extends RequestedCheck {
        constructor(config: RequestedDocumentAuthenticityConfig);
    }

    /**
     * Builder to assist the creation of {@link RequestedDocumentAuthenticityCheck}.
     */
    class RequestedDocumentAuthenticityCheckBuilder extends BaseCheckBuilder {
        /**
         * Build a {@link RequestedDocumentAuthenticityCheck} using the values supplied to the builder
         */
        build(): RequestedDocumentAuthenticityCheck;
    }

    /**
     * The configuration applied when creating a FaceMatchCheck
     *
     *  RequestedFaceMatchConfig
     */
    class RequestedFaceMatchConfig {
        manualCheck: string;
        /**
         * @param manualCheck The value for a manual check for a given face match.
         */
        constructor(manualCheck: string);
        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): {
            manual_check: string;
        };
    }

    /**
     * Requests creation of a FaceMatchCheck
     */
    class RequestedFaceMatchCheck extends RequestedCheck {
        constructor(config: RequestedFaceMatchConfig);
    }

    /**
     * Builder to assist creation of {@link RequestedFaceMatchCheck}.
     */
    class RequestedFaceMatchCheckBuilder extends BaseCheckBuilder {
        /**
         * Build a {@link RequestedFaceMatchCheck} using the values supplied to the builder
         */
        build(): RequestedFaceMatchCheck;
    }

    /**
     * The configuration applied when creating a RequestedIdDocumentComparisonCheck
     */
    class RequestedIdDocumentComparisonConfig {
        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): object;
    }

    /**
     *  RequestedIdDocumentComparisonCheck
     */
    class RequestedIdDocumentComparisonCheck extends RequestedCheck {
        constructor(config: RequestedIdDocumentComparisonConfig);
    }

    /**
     * Builder to assist the creation of {@link RequestedIdDocumentComparisonCheck}.
     */
    class RequestedIdDocumentComparisonCheckBuilder {
        build(): RequestedIdDocumentComparisonCheck;
    }

    /**
     * The configuration applied when creating a LivenessCheck
     *
     *  RequestedLivenessConfig
     */
    class RequestedLivenessConfig {
        maxRetries: number;
        livenessType: string;
        /**
         * @param maxRetries
         *   The maximum number of retries allowed by the user
         *   for a given liveness check
         * @param livenessType The type of the liveness check
         */
        constructor(maxRetries: number, livenessType: string);
        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): {
            max_retries: number;
            liveness_type: string;
        };
    }

    /**
     * Requests creation of a LivenessCheck
     */
    class RequestedLivenessCheck extends RequestedCheck {
        constructor(config: RequestedLivenessConfig);
    }

    /**
     * Builder to assist the creation of {@link RequestedLivenessCheck}.
     */
    class RequestedLivenessCheckBuilder {
        /**
         * @default 1
         */
        maxRetries: number;
        livenessType: string;
        constructor();
        /**
         * Sets the type to be of a ZOOM liveness check
         */
        forZoomLiveness(): this;
        /**
         * Sets the type of the liveness check to the supplied value
         *
         * @param livenessType The type of the liveness check
         */
        forLivenessType(livenessType: string): this;
        /**
         * Sets the maximum number of retries allowed by the user
         *
         * @param maxRetries The maximum number of retries
         */
        withMaxRetries(maxRetries: number): this;
        /**
         * Builds a {@link RequestedLivenessCheck} using the values supplied to the builder
         */
        build(): RequestedLivenessCheck;
    }

    /**
     * The configuration applied when creating a RequestedThirdPartyIdentityCheck
     */
    class RequestedThirdPartyIdentityConfig {
        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): object;
    }

    class RequestedThirdPartyIdentityCheck extends RequestedCheck {
        constructor(config: RequestedThirdPartyIdentityConfig);
    }

    /**
     * Builder to assist the creation of {@link RequestedThirdPartyIdentityCheck}.
     */
    class RequestedThirdPartyIdentityCheckBuilder {
        build(): RequestedThirdPartyIdentityCheck;
    }

    class BaseBuilder {
        build(): this;
    }

    class ManualCheckBuilder extends BaseBuilder {
        withManualCheckFallback(): this;
        withManualCheckNever(): this;
        withManualCheckAlways(): this;
    }

    class RequiredIdDocumentComparisonCheckBuilder extends BaseBuilder {}

    class DocumentRestriction {
        countryCodes?: string[];
        documentTypes?: string[];
        constructor(countryCodes: string[], documentTypes: string[]);
        toJSON(): {
            document_types: string[];
            country_codes: string[];
        };
    }

    class DocumentRestrictionBuilder {
        documentTypes: string[];
        countryCodes: string[];
        withDocumentTypes(documentTypes: string[]): this;
        withCountries(countryCodes: string[]): this;
        build(): DocumentRestriction;
    }

    class DocumentFilter {
        type: string;
        constructor(type: string);
        toJSON(): {
            type: string;
        };
    }

    class DocumentRestrictionsFilter extends DocumentFilter {
        inclusion: string;
        documents: DocumentRestriction[];
        constructor(inclusion: string, documents: DocumentRestriction[]);
        toJSON(): {
            type: string;
            inclusion: string;
            documents: DocumentRestriction[];
        };
    }

    class DocumentRestrictionsFilterBuilder {
        documents: DocumentRestriction[];
        inclusion: string;
        constructor();
        forWhitelist(): this;
        forBlacklist(): this;
        withDocumentRestriction(documentRestriction: DocumentRestriction): this;
        build(): DocumentRestrictionsFilter;
    }

    class CountryRestriction {
        inclusion: string;
        countryCodes: string[];
        constructor(inclusion: string, countryCodes: string[]);
        toJSON(): {
            inclusion: string;
            country_codes: string[];
        };
    }

    class TypeRestriction {
        inclusion: string;
        documentTypes: string[];
        constructor(inclusion: string, documentTypes: string[]);
        toJSON(): {
            inclusion: string;
            document_types: string[];
        };
    }

    class OrthogonalRestrictionsFilter extends DocumentFilter {
        countryRestriction?: CountryRestriction;
        typeRestriction?: TypeRestriction;
        constructor(countryRestriction: CountryRestriction, typeRestriction: TypeRestriction);
        toJSON(): {
            type: string;
            country_restriction?: CountryRestriction;
            type_restriction?: TypeRestriction;
        };
    }

    class OrthogonalRestrictionsFilterBuilder {
        countryRestriction: CountryRestriction;
        typeRestriction: TypeRestriction;
        withWhitelistedCountries(countryCodes: string[]): this;
        withBlacklistedCountries(countryCodes: string[]): this;
        withWhitelistedDocumentTypes(documentTypes: string[]): this;
        withBlacklistedDocumentTypes(documentTypes: string[]): this;
        build(): OrthogonalRestrictionsFilter;
    }

    class RequiredIdDocument extends RequiredDocument {
        filter?: DocumentFilter;
        constructor(filter?: DocumentFilter);
        toJSON(): {
            type: string;
            filter?: DocumentFilter;
        };
    }

    class RequiredIdDocumentBuilder {
        filter: DocumentFilter;
        withFilter(filter: DocumentFilter): this;
        build(): RequiredIdDocument;
    }

    class Objective {
        type: string;
        constructor(type: string);
        toJSON(): {
            type: string;
        };
    }

    class RequiredSupplementaryDocument extends RequiredDocument {
        objective: Objective;
        documentTypes?: string[];
        countryCodes?: string[];
        constructor(objective: Objective, documentTypes: string[], countryCodes: string[]);
        toJSON(): {
            type: string;
            objective: Objective;
            document_types?: string[];
            country_codes?: string[];
        };
    }

    class RequiredSupplementaryDocumentBuilder {
        countryCodes: string[];
        documentTypes: string[];
        objective: Objective;
        withCountryCodes(countryCodes: string[]): this;
        withDocumentTypes(documentTypes: string[]): this;
        withObjective(objective: Objective): this;
        build(): RequiredSupplementaryDocument;
    }

    class ProofOfAddressObjective extends Objective {
        constructor();
    }

    class ProofOfAddressObjectiveBuilder {
        build(): ProofOfAddressObjective;
    }

    /**
     * The configuration applied when creating each RequestedSupplementaryDocTextExtraction
     */
    class RequestedSupplementaryDocTextExtractionConfig {
        manualCheck: string;
        /**
         * @param manualCheck Describes the manual fallback behaviour applied to each Task
         */
        constructor(manualCheck: string);
        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): {
            manual_check: string;
        };
    }

    /**
     * Requests that a SupplementaryTextExtractionTask be applied to each Document
     */
    class RequestedSupplementaryDocTextExtractionTask extends RequestedTask {
        constructor(config: RequestedSupplementaryDocTextExtractionConfig);
    }

    /**
     * Builder to assist creation of {@link RequestedSupplementaryDocTextExtractionTask}.
     */
    class RequestedSupplementaryDocTextExtractionTaskBuilder extends BaseCheckBuilder {
        /**
         * Builds a {@link RequestedSupplementaryDocTextExtractionTask} using the values
         * supplied to the builder
         */
        build(): RequestedSupplementaryDocTextExtractionTask;
    }

    /**
     * The configuration applied when creating each TextExtractionTask
     */
    class RequestedTextExtractionConfig {
        manualCheck: string;
        chipData: string;
        /**
         * @param manualCheck Describes the manual fallback behaviour applied to each Task
         * @param chipData Describes the chip data requirement for each Task
         */
        constructor(manualCheck: string, chipData: string);
        /**
         * @returns data for JSON.stringify()
         */
        toJSON(): {
            manual_check: string;
            chip_data: string;
        };
    }

    /**
     * Requests that a TextExtractionTask be applied to each Document
     */
    class RequestedTextExtractionTask extends RequestedTask {
        constructor(config: RequestedTextExtractionConfig);
    }

    /**
     * Builder to assist creation of {@link RequestedTextExtractionTask}.
     */
    class RequestedTextExtractionTaskBuilder extends BaseCheckBuilder {
        chipData: string;
        withChipDataDesired(): this;
        withChipDataIgnore(): this;
        /**
         * Builds a {@link RequestedTextExtractionTask} using the values supplied to the builder
         */
        build(): RequestedTextExtractionTask;
    }

    /**
     * Builder to assist in the creation of {@link NotificationConfig}.
     */
    class NotificationConfigBuilder {
        topics: string[];
        authToken: string;
        endpoint: string;
        /**
         * Setup default builder properties
         */
        constructor();
        /**
         * Sets the authorization token to be included in call-back messages
         */
        withAuthToken(authToken: string): this;
        /**
         * Sets the endpoint that notifications should be sent to
         */
        withEndpoint(endpoint: string): this;
        /**
         * Adds RESOURCE_UPDATE to the list of topics that trigger notification messages
         */
        forResourceUpdate(): this;
        /**
         * Adds TASK_COMPLETION to the list of topics that trigger notification messages
         */
        forTaskCompletion(): this;
        /**
         * Adds CHECK_COMPLETION to the list of topics that trigger notification messages
         */
        forCheckCompletion(): this;
        /**
         * Adds SESSION_COMPLETION to the list of topics that trigger notification messages
         */
        forSessionCompletion(): this;
        /**
         * Adds a topic to the list of topics that trigger notification messages
         */
        withTopic(topicName: string): this;
        /**
         * Build the {@link NotificationConfig} using the supplied values
         */
        build(): NotificationConfig;
    }

    /**
     * Builder to assist in the creation of {@link SdkConfig}.
     */
    class SdkConfigBuilder {
        allowedCaptureMethods: string;
        primaryColour: string;
        secondaryColour: string;
        fontColour: string;
        locale: string;
        presetIssuingCountry: string;
        successUrl: string;
        errorUrl: string;
        privacyPolicyUrl: string;
        /**
         * Sets the allowed capture method to "CAMERA"
         */
        withAllowsCamera(): this;
        /**
         * Sets the allowed capture method to "CAMERA_AND_UPLOAD"
         */
        withAllowsCameraAndUpload(): this;
        /**
         * Sets the allowed capture method
         *
         * @param allowedCaptureMethod the allowed capture method
         */
        withAllowedCaptureMethods(allowedCaptureMethods: string): this;
        /**
         * Sets the primary colour to be used by the web/native client
         *
         * @param primaryColour The primary colour, hexadecimal value e.g. #ff0000
         */
        withPrimaryColour(primaryColour: string): this;
        /**
         * Sets the secondary colour to be used by the web/native client (used on the button)
         *
         * @param secondaryColour The secondary colour, hexadecimal value e.g. #ff0000
         */
        withSecondaryColour(secondaryColour: string): this;
        /**
         * Sets the font colour to be used by the web/native client (used on the button)
         *
         * @param fontColour The font colour
         */
        withFontColour(fontColour: string): this;
        /**
         * Sets the locale on the builder
         *
         * @param locale The locale, e.g. "en"
         */
        withLocale(locale: string): this;
        /**
         * Sets the preset issuing country on the builder
         *
         * @param presetIssuingCountry the preset issuing country
         */
        withPresetIssuingCountry(presetIssuingCountry: string): this;
        /**
         * Sets the success URL for the redirect that follows the web/native client
         * uploading documents successfully
         *
         * @param successUrl the success URL
         */
        withSuccessUrl(successUrl: string): this;
        /**
         * Sets the error URL for the redirect that follows the web/native client
         * uploading documents unsuccessfully
         *
         * @param errorUrl the error URL
         */
        withErrorUrl(errorUrl: string): this;
        /**
         * Sets the privacy policy URL
         *
         * @param privacyPolicyUrl the privacy policy URL
         */
        withPrivacyPolicyUrl(privacyPolicyUrl: string): this;
        /**
         * Builds the {@link SdkConfig} using the values supplied to the builder
         */
        build(): SdkConfig;
    }

    /**
     * Builder to assist the creation of {@link SessionSpecification}.
     */
    class SessionSpecificationBuilder {
        requestedChecks: any[];
        requestedTasks: any[];
        requiredDocuments: any[];
        clientSessionTokenTtl: number;
        resourcesTtl: number;
        userTrackingId: string;
        notifications: NotificationConfig;
        sdkConfig: SdkConfig;
        blockBiometricConsent: any;
        constructor();
        /**
         * Sets the client session token TTL (time-to-live)
         *
         * @param clientSessionTokenTtl The client session token TTL
         */
        withClientSessionTokenTtl(clientSessionTokenTtl: number): this;
        /**
         * Sets the resources TTL (time-to-live)
         *
         * @param resourcesTtl The resources TTL
         */
        withResourcesTtl(resourcesTtl: number): this;
        /**
         * Sets the user tracking ID
         *
         * @param userTrackingId The user tracking ID
         */
        withUserTrackingId(userTrackingId: string): this;
        /**
         * Sets the {@link NotificationConfig}
         */
        withNotifications(notifications: NotificationConfig): this;
        /**
         * Adds a {@link RequestedCheck} to the list
         */
        withRequestedCheck(requestedCheck: RequestedCheck): this;
        /**
         * Adds a {@link RequestedTask} to the list
         */
        withRequestedTask(requestedTask: RequestedTask): this;
        /**
         * Sets the {@link SdkConfig}
         */
        withSdkConfig(sdkConfig: SdkConfig): this;
        /**
         * Adds a {@link RequiredDocument} to the list documents required from the client
         */
        withRequiredDocument(requiredDocument: RequiredDocument): this;
        /**
         * Sets whether or not to block the collection of biometric consent
         */
        withBlockBiometricConsent(blockBiometricConsent: boolean): this;
        /**
         * Builds the {@link SessionSpecification} based on the values supplied to the builder
         */
        build(): SessionSpecification;
    }
}

export = Create;
