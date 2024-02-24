const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Fossils.
 *
 * @class
 */
class FossilModule {
  /**
   * The query URL for fetching Fossil data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of FossilModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Fossil data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `fossil${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Fossil data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Fossil data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Fossil data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Fossil data: ${error.message}`);
    }
  }
}

// Export the FossilModule class
module.exports = FossilModule;
