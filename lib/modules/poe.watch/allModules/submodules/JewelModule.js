const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Jewels.
 *
 * @class
 */
class JewelModule {
  /**
   * The query URL for fetching Jewel data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of JewelModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Jewel data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `jewel${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Jewel data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Jewel data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Jewel data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Jewel data: ${error.message}`);
    }
  }
}

// Export the JewelModule class
module.exports = JewelModule;
