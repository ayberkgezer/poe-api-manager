import IPoeWatch from "../Interfaces/IPoeWatch";
import getData from "../poe.watch/allModules/func/getData";

/**
 * Represents an abstract class for interacting with the PoeWatch API.
 */
abstract class PoeWatch implements IPoeWatch {
    constructor(protected readonly league: string, protected readonly type: string) {
    }

    /**
     * Retrieves data from the PoeWatch API.
     * @param requestedProperties Optional array of properties to include in the response.
     * @returns A promise that resolves to an array of objects containing the requested data.
     * @throws If there is an error retrieving the data.
     */
    public async getData(requestedProperties?: string[]): Promise<object[]> {
        try {
            return getData(this.league, this.type, requestedProperties);
        } catch (error: any) {
            throw new Error(`Error retrieving ${this.type} data: ${error.message}`);
        }
    }
}

export default PoeWatch;