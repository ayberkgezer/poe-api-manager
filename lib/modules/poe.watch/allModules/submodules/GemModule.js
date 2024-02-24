const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Skill Gems.
 *
 * @class
 */
class GemModule {
  /**
   * The query URL for fetching Skill Gem data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of GemModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Skill Gem data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `gem${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Skill Gem data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Skill Gem data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Skill Gem data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Skill Gem data: ${error.message}`);
    }
  }
}

// Export the GemModule class
module.exports = GemModule;
