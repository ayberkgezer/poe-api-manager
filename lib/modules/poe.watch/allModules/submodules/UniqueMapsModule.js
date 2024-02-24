const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Unique Maps.
 *
 * @class
 */
class UniqueMapsModule {
  /**
   * The query URL for fetching Unique Maps data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of UniqueMapsModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Unique Maps data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `currency${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Unique Maps data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Unique Maps data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Unique Maps data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Unique Maps data: ${error.message}`);
    }
  }
}

// Export the UniqueMapsModule class
module.exports = UniqueMapsModule;
