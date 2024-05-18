/**
 * Represents the interface for interacting with PoeWatch data.
 */
interface IPoeWatch {
    /**
     * Retrieves data from PoeWatch API.
     * @param requestedProperties Optional array of properties to include in the response.
     * @returns A promise that resolves to an array of objects representing the retrieved data.
     */
    getData(requestedProperties?: string[]): Promise<object[]>;
}

export default IPoeWatch;