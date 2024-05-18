/**
 * Represents the interface for interacting with the PoeNinja API.
 */
interface IPoeNinja {
    /**
     * Retrieves data from the PoeNinja API.
     * @param requestedProperties Optional array of properties to include in the response.
     * @returns A promise that resolves to the retrieved data.
     */
    getData(requestedProperties?: string[]): Promise<object[]>;
}

export default IPoeNinja;
