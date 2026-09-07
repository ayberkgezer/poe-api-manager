import IPoeNinja from "../../../Interfaces/IPoeNinja";
import ApiError from "../../../errors/ApiError";
import CustomError from "../../../errors/CustomError";
import getData2 from "./getData2";

/**
 * Represents a poe.ninja PoE2 submodule. Unlike PoE1, there's a single
 * generic leaf here - no PoE2 type needs behaviour beyond getData().
 * @class
 * @implements {IPoeNinja}
 */
export default class PoeNinja2 implements IPoeNinja {
  /**
   * Creates an instance of PoeNinja2.
   * @param {string} league - The league name.
   * @param {string} type - The poe.ninja PoE2 type (e.g. "Currency", "UniqueWeapons").
   * @param {"exchange" | "item"} endpoint - Which PoE2 economy endpoint to hit.
   */
  constructor(
    protected readonly league: string,
    protected readonly type: string,
    protected readonly endpoint: "exchange" | "item",
  ) {}

  /**
   * Retrieves data from the poe.ninja PoE2 API.
   * @param {string[]} requestedProperties - Optional array of properties to include in the retrieved data.
   * @returns {Promise<object[]>} A promise that resolves to an array of objects containing the retrieved data.
   * @throws {Error} If there is an error retrieving the data.
   */
  public async getData(requestedProperties?: string[]): Promise<object[]> {
    try {
      return await getData2(
        this.league,
        this.type,
        this.endpoint,
        requestedProperties,
      );
    } catch (error: any) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw new ApiError(
        `Error getData ${this.type} (${this.endpoint}) data: ${error.message}`,
        500,
        { league: this.league, type: this.type, endpoint: this.endpoint },
      );
    }
  }
}
