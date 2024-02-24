const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Beasts.
 *
 * @class
 */
class BeastModule {
  /**
   * The query URL for fetching beast data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of BeastModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching beast data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `beast${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves beast data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch beast data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the beast data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching beast data: ${error.message}`);
    }
  }
}

// Export the BeastModule class
module.exports = BeastModule;
