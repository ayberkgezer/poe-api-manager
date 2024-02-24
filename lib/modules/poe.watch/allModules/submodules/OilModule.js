const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Oils.
 *
 * @class
 */
class OilModule {
  /**
   * The query URL for fetching Oil data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of OilModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Oil data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `oil${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Oil data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Oil data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Oil data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Oil data: ${error.message}`);
    }
  }
}

// Export the OilModule class
module.exports = OilModule;
