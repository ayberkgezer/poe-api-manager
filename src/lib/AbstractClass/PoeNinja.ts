import IPoeNinja from "../Interfaces/IPoeNinja";
import ApiError from "../errors/ApiError";
import CustomError from "../errors/CustomError";
import getData from "../modules/poe.ninja/func/getData";
/**
 * Abstract class representing a PoeNinja.
 * @abstract
 * @class
 * @implements {IPoeNinja}
 */
export default abstract class PoeNinja implements IPoeNinja {
  /**
   * Represents a PoeNinja object.
   * @constructor
   * @param {string} league - The league name.
   * @param {string} typeName
   * @param {string} type - The type.
   */
  constructor(
    protected readonly league: string,
    protected readonly typeName: string,
    protected readonly type: string,
  ) {}
  /**
   * Retrieves data from the API based on the specified league, type name, and type.
   * @param {string} requestedProperties - Optional array of properties to include in the retrieved data.
   * @returns {Promise<object[]>} A promise that resolves to an array of objects containing the retrieved data.
   * @throws {Error} If there is an error retrieving the data.
   */
  public async getData(requestedProperties?: string[]): Promise<object[]> {
    try {
      return getData(
        this.league,
        this.typeName,
        this.type,
        requestedProperties,
      );
    } catch (error: any) {
      // Pass through custom errors
      if (error instanceof CustomError) {
        throw error;
      }
      throw new ApiError(
        `Error getData ${this.typeName} and ${this.type} data: ${error.message}`,
        500,
        { league: this.league, typeName: this.typeName, type: this.type },
      );
    }
  }
}
