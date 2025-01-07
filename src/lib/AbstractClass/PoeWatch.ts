import IPoeWatch from "../Interfaces/IPoeWatch";
import getData from "../modules/poe.watch/func/getData";

/**
 * Represents an abstract class for interacting with the PoeWatch API.
 * @abstract
 * @class
 * @implements {IPoeWatch}
 */
abstract class PoeWatch implements IPoeWatch {
  /**
   * Creates a new instance of PoeWatch.
   * @param {string} league - The league name to get data from.
   * @param {string} type - The type of data to retrieve (e.g. 'currency', 'items', etc.).
   */
  constructor(
    protected readonly league: string,
    protected readonly type: string,
  ) {}

  /**
   * Retrieves data from the PoeWatch API.
   * @param {string[]} requestedProperties Optional array of properties to include in the response.
   * @returns {Promise<object[]>} A promise that resolves to an array of objects containing the requested data.
   * @throws {Error} If there is an error retrieving the data.
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
