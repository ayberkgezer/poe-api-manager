const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Sextants.
 *
 * @class
 */
class SextantModule {
  /**
   * The query URL for fetching Sextant data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of SextantModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Sextant data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `sextants${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Sextant data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Sextant data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Sextant data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Sextant data: ${error.message}`);
    }
  }
}

// Export the SextantModule class
module.exports = SextantModule;
