declare namespace DocScanCreate {
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
     * @class RequestedFaceMatchConfig
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
     * @class RequestedIdDocumentComparisonCheck
     */
    class RequestedIdDocumentComparisonCheck extends RequestedCheck {
        /**
         * @param {RequestedIdDocumentComparisonConfig} config
         */
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
     * @class RequestedLivenessConfig
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

    class DocumentRestrictionBuilder extends BaseBuilder {
        withCountries(countries: string[]): this;
        withDocumentType(documentTypes: string[]): this;
    }

    class DocumentRestrictionsFilterBuilder extends BaseBuilder {
        withDocumentRestriction(restriction: DocumentRestrictionBuilder): this;
        forWhitelist(): this;
        forBlacklist(): this;
    }

    class OrthogonalRestrictionsFilterBuilder extends BaseBuilder {
        withWhitelistedCountries(countries: string[]): this;
        withBlacklistedCountries(countries: string[]): this;
        withWhitelistedDocumentTypes(documentTypes: string[]): this;
        withBlacklistedDocumentTypes(documentTypes: string[]): this;
    }

    class RequiredIdDocumentBuilder extends BaseBuilder {
        withFilter(filter: DocumentRestrictionsFilterBuilder | OrthogonalRestrictionsFilterBuilder): this;
    }

    class ProofOfAddressObjectiveBuilder extends BaseBuilder {}

    class RequiredSupplementaryDocumentBuilder extends BaseBuilder {
        withObjective(objective: ProofOfAddressObjectiveBuilder): this;
    }

    class RequiredIdDocumentComparisonCheckBuilder extends BaseBuilder {}

    class RequestedTextExtractionTaskBuilder extends ManualCheckBuilder {
        withChipDataDesired(): this;
        withChipDataIgnore(): this;
    }

    class RequestedSupplementaryDocTextExtractionTaskBuilder extends ManualCheckBuilder {}

    class SdkConfigBuilder extends BaseBuilder {
        withAllowsCameraAndUpload(): this;
        withPrimaryColour(colour: string): this;
        withSecondaryColour(colour: string): this;
        withFontColour(colour: string): this;
        withLocale(locale: string): this;
        withPresetIssuingCountry(country: string): this;
        withSuccessUrl(url: string): this;
        withErrorUrl(url: string): this;
    }

    class NotificationConfigBuilder extends BaseBuilder {
        withEndpoint(endpoint: string): this;
        withAuthToken(authToken: string): this;
        forResourceUpdate(): this;
        forTaskCompletion(): this;
        forSessionCompletion(): this;
        forCheckCompletion(): this;
    }

    class SessionSpecificationBuilder extends BaseBuilder {
        withClientSessionTokenTtl(ttl: number): this;
        withResourcesTtl(ttl: number): this;
        withUserTrackingId(trackingId: string): this;
        withRequiredDocument(document: RequiredIdDocumentBuilder | RequiredSupplementaryDocumentBuilder): this;
        withRequestedCheck(check: any): this;
        withRequestedTask(task: any): this;
        withSdkConfig(config: SdkConfigBuilder): this;
        withNotifications(config: NotificationConfigBuilder): this;
        withBlockBiometricConsent(blockBiometricConsent: boolean): this;
    }
}

export = DocScanCreate;
