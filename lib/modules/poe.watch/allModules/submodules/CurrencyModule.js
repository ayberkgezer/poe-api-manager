const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Currency.
 *
 * @class
 */
class CurrencyModule {
  /**
   * The query URL for fetching currency data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of CurrencyModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching currency data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `currency${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves currency data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch currency data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the currency data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching currency data: ${error.message}`);
    }
  }
}

// Uncomment the line below if you want to export the CurrencyModule class
// module.exports = CurrencyModule;
module.exports = CurrencyModule;
