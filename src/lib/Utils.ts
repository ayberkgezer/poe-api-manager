import getLeagues from "./modules/utils/getLeagues";
import getNinjaLeagues from "./modules/utils/getNinjaLeagues";
import filterProperties from "./mainfunctions/propertyFilter";
/**
 * A utility class.
 * @class
 */
export class Utils {
  constructor() {}

  /**
   * Fetches the list of leagues for the game.
   * @remarks PoE1-only, sourced from poe.watch. See getPoe1Leagues()/getPoe2Leagues()
   * for poe.ninja-sourced leagues, including PoE2.
   * @returns {string[]} The array of league names.
   * @throws {Error} If there's an error fetching the leagues.
   */
  async getLeagues(): Promise<string[]> {
    return await getLeagues();
  }

  /**
   * Fetches the list of PoE1 league names from poe.ninja.
   * @returns {string[]} The array of league names.
   * @throws {Error} If there's an error fetching the leagues.
   */
  async getPoe1Leagues(): Promise<string[]> {
    return await getNinjaLeagues("poe1");
  }

  /**
   * Fetches the list of PoE2 league names from poe.ninja.
   * @returns {string[]} The array of league names.
   * @throws {Error} If there's an error fetching the leagues.
   */
  async getPoe2Leagues(): Promise<string[]> {
    return await getNinjaLeagues("poe2");
  }

  /**
   * Filters properties of objects in an array based on the specified properties.
   *
   * @param {object[]} data - The array of objects to filter.
   * @param {string[]} properties - The array of property names to include in the result.
   * @returns {Promise<object[]>} - An array of objects with only the specified properties.
   * @throws {Error} If there's an error filtering the properties.
   */
  async filterProperties(
    data: object[],
    properties: string[],
  ): Promise<object[]> {
    return filterProperties(data, properties);
  }
}
