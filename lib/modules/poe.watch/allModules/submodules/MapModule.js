const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Maps.
 *
 * @class
 */
class MapModule {
  /**
   * The query URL for fetching Map data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of MapModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Map data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `map${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Map data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Map data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Map data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Map data: ${error.message}`);
    }
  }
}

// Export the MapModule class
module.exports = MapModule;
