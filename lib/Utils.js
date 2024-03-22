const getLeagues = require("./modules/utils/getLeagues");
const filterProperties = require("./modules/mainfunctions/filter/propertyFilter");

/**
 * A utility class.
 *
 * @class
 */
class Utils {
  constructor() {}
  /**
   * Fetches the list of leagues for the game.
   * @async
   * @function getLeagues
   * @returns {Promise<string[]>} The array of league names.
   * @throws {Error} If there's an error fetching the leagues.
   */
  async getLeagues() {
    try {
      return getLeagues();
    } catch (error) {
      throw new Error(`Error fetching data Leagues: ${error.message}`);
    }
  }
  /**
   * Filters properties of objects in an array based on the specified properties.
   *
   * @param {Array<Object>} data - The array of objects to filter.
   * @param {Array<string>} properties - The array of property names to include in the result.
   * @returns {Array<Object>} - An array of objects with only the specified properties.
   */
  async filterProperties(data, properties) {
    try {
      return filterProperties(data, properties);
    } catch (error) {
      throw new Error(`Error fetching data Leagues: ${error.message}`);
    }
  }
}

module.exports = Utils;
