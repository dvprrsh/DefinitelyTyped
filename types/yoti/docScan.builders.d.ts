declare class BaseBuilder {
    constructor();
    build(): any;
}

declare class ManualCheckBuilder extends BaseBuilder {
    withManualCheckFallback(): this;
    withManualCheckNever(): this;
    withManualCheckAlways(): this;
}

declare class DocumentRestrictionBuilder extends BaseBuilder {
    withCountries(countries: string[]): this;
    withDocumentType(documentTypes: string[]): this;
}
declare class DocumentRestrictionsFilterBuilder extends BaseBuilder {
    withDocumentRestriction(restriction: DocumentRestrictionBuilder): this;
    forWhitelist(): this;
    forBlacklist(): this;
}
declare class OrthogonalRestrictionsFilterBuilder extends BaseBuilder {
    withWhitelistedCountries(countries: string[]): this;
    withBlacklistedCountries(countries: string[]): this;
    withWhitelistedDocumentTypes(documentTypes: string[]): this;
    withBlacklistedDocumentTypes(documentTypes: string[]): this;
}
declare class RequiredIdDocumentBuilder extends BaseBuilder {
    withFilter(filter: DocumentRestrictionsFilterBuilder | OrthogonalRestrictionsFilterBuilder): this;
}
declare class ProofOfAddressObjectiveBuilder extends BaseBuilder {}
declare class RequiredSupplementaryDocumentBuilder extends BaseBuilder {
    withObjective(objective: ProofOfAddressObjectiveBuilder): this;
}

declare class RequestedDocumentAuthenticityCheckBuilder extends BaseBuilder {}
declare class RequestedLivenessCheckBuilder extends BaseBuilder {
    forZoomLiveness(): this;
    withMaxRetries(retries: number): this;
}
declare class RequestedFaceMatchCheckBuilder extends ManualCheckBuilder {}
declare class RequiredIdDocumentComparisonCheckBuilder extends BaseBuilder {}

declare class RequestedTextExtractionTaskBuilder extends ManualCheckBuilder {
    withChipDataDesired(): this;
    withChipDataIgnore(): this;
}
declare class RequestedSupplementaryDocTextExtractionTaskBuilder extends ManualCheckBuilder {}

declare class SdkConfigBuilder extends BaseBuilder {
    withAllowsCameraAndUpload(): this;
    withPrimaryColour(colour: string): this;
    withSecondaryColour(colour: string): this;
    withFontColour(colour: string): this;
    withLocale(locale: string): this;
    withPresetIssuingCountry(country: string): this;
    withSuccessUrl(url: string): this;
    withErrorUrl(url: string): this;
}
declare class NotificationConfigBuilder extends BaseBuilder {
    withEndpoint(endpoint: string): this;
    withAuthToken(authToken: string): this;
    forResourceUpdate(): this;
    forTaskCompletion(): this;
    forSessionCompletion(): this;
    forCheckCompletion(): this;
}
declare class SessionSpecificationBuilder extends BaseBuilder {
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

export {
    BaseBuilder,
    ManualCheckBuilder,
    DocumentRestrictionBuilder,
    DocumentRestrictionsFilterBuilder,
    OrthogonalRestrictionsFilterBuilder,
    RequiredIdDocumentBuilder,
    ProofOfAddressObjectiveBuilder,
    RequiredSupplementaryDocumentBuilder,
    RequestedDocumentAuthenticityCheckBuilder,
    RequestedLivenessCheckBuilder,
    RequestedFaceMatchCheckBuilder,
    RequiredIdDocumentComparisonCheckBuilder,
    RequestedTextExtractionTaskBuilder,
    RequestedSupplementaryDocTextExtractionTaskBuilder,
    SdkConfigBuilder,
    NotificationConfigBuilder,
    SessionSpecificationBuilder,
};
