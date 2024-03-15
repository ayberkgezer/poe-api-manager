const getLeagues = require("./modules/utils/getLeagues");

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
}

module.exports = Utils;
