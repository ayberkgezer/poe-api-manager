import IPoeWatch from "../../../Interfaces/IPoeWatch";
import ApiError from "../../../errors/ApiError";
import CustomError from "../../../errors/CustomError";
import getData2 from "./getData2";
import getCategory2 from "./getCategory2";

/**
 * Represents poe.watch's PoE2 exchange ratios - the only PoE2 endpoint
 * poe.watch exposes.
 * @class
 * @implements {IPoeWatch}
 */
export default class Poe2ExchangeModule implements IPoeWatch {
  /**
   * Creates a new instance of Poe2ExchangeModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(protected readonly league: string) {}

  /**
   * Retrieves PoE2 exchange ratios data.
   * @param {string[]} requestedProperties Optional array of properties to include in the response.
   * @returns {Promise<object[]>} A promise that resolves to an array of objects containing the requested data.
   * @throws {Error} If there is an error retrieving the data.
   */
  public async getData(requestedProperties?: string[]): Promise<object[]> {
    try {
      return await getData2(this.league, requestedProperties);
    } catch (error: any) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw new ApiError(
        `Error retrieving PoE2 exchange data: ${error.message}`,
        500,
        { league: this.league },
      );
    }
  }

  /**
   * Retrieves PoE2 exchange ratios filtered by category.
   * @async
   * @param categoryName - The category to filter by (e.g. "currency").
   * @returns - A Promise containing data for the specified category.
   * @throws - Throws errors encountered while fetching data.
   */
  async getCategory(categoryName: string): Promise<object[]> {
    return await getCategory2(this.league, categoryName);
  }
}
