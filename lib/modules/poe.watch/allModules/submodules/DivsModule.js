const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Divination Cards.
 *
 * @class
 */
class DivsModule {
  /**
   * The query URL for fetching Divination Card data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of DivsModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Divination Card data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `currency${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Divination Card data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Divination Card data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Divination Card data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Divination Card data: ${error.message}`);
    }
  }
}

// Export the DivsModule class
module.exports = DivsModule;
