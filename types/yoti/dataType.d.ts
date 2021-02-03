/// <reference types="../bytebuffer" />

declare namespace YotiDataTypes {
    /**
     * Formats date part padded with leading zeros.
     * @returns Date part with leading zeros, e.g. `04`
     */
    function formatDatePart(part: any, length: number): string;

    function extractMicrosecondsFromDateString(dateString: string): number;

    /**
     * Adds microseconds to seconds and format with leading zeros.
     * @returns Seconds with microseconds in format `{SS}.{mmmmmm}`
     */
    function formatSecondsWithMicroseconds(seconds: number, microseconds: number): string;

    /**
     * Extract microseconds from provided timestamp.
     *
     * Examples:
     *   - Signed integer -1571630945999999 will have 1 microsecond.
     *   - 1571630945999999 will have 999999 microseconds.
     */
    function extractMicrosecondsFromTimestamp(timestamp: number): number;

    /**
     * Date object with microsecond accuracy.
     */
    class YotiDate extends Date {
        microseconds: number;
        microsecondUnixTimestamp: number;
        constructor(timestamp: number);
        /**
         * Returns a number, between 0 and 999999, representing the microseconds.
         */
        getMicroseconds(): number;
        /**
         * Time with microseconds.
         *
         * @returns Time in format `{HH}:{MM}:{SS}.{mmmmmm}`
         */
        getMicrosecondTime(): string;

        /**
         * Returns ISO 8601 UTC date.
         *
         * @returns Date in format `{YYYY}-{MM}-{DD}`
         */
        toISODateString(): string;
        static fromDateString(dateString: string): YotiDate;
        /**
         * Returns ISO 8601 UTC timestamp with microseconds.
         *
         * @returns Timestamp in format `{YYYY}-{MM}-{DD}T{HH}:{MM}:{SS}.{mmmmmm}Z`
         */
        getMicrosecondTimestamp(): string;
        /**
         * Returns Unix timestamp with microseconds.
         */
        getMicrosecondUnixTimestamp(): number;
    }

    class Media {
        content: ByteBuffer;
        mimeType: string;
        constructor(content: Buffer | ByteBuffer, mimeType: string);
        /**
         * Get the raw image content.
         */
        getContent(): ByteBuffer;
        /**
         * Get the base64 image content.
         */
        getBase64Content(): string;
        /**
         * Get the image mime type.
         */
        getMimeType(): string;
    }
}

export = YotiDataTypes;
