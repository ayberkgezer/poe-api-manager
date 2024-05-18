import getLeagues from "./modules/utils/getLeagues";
import filterProperties from "./modules/mainfunctions/propertyFilter";

/**
 * A utility class.
 */
class Utils {
  constructor() {}

  /**
   * Fetches the list of leagues for the game.
   * @returns The array of league names.
   * @throws If there's an error fetching the leagues.
   */
  async getLeagues(): Promise<string[]> {
    try {
      return await getLeagues();
    } catch (error) {
      throw new Error(`Error fetching data Leagues: ${(error as Error).message}`);
    }
  }

  /**
   * Filters properties of objects in an array based on the specified properties.
   *
   * @param data - The array of objects to filter.
   * @param properties - The array of property names to include in the result.
   * @returns - An array of objects with only the specified properties.
   */
  async filterProperties(data: object[], properties: string[]): Promise<object[]> {
    try {
      return filterProperties(data, properties);
    } catch (error) {
      throw new Error(`Error fetching data Leagues: ${(error as Error).message}`);
    }
  }
}

export default Utils;
