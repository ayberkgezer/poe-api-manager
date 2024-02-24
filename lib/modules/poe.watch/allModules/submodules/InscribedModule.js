const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Inscribed Ultimatums.
 *
 * @class
 */
class InscribedModule {
  /**
   * The query URL for fetching Inscribed Ultimatum data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of InscribedModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Inscribed Ultimatum data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `currency${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Inscribed Ultimatum data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Inscribed Ultimatum data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Inscribed Ultimatum data.
       *
       * @throws {Error}
       */
      throw new Error(
        `Error fetching Inscribed Ultimatum data: ${error.message}`
      );
    }
  }
}

// Export the InscribedModule class
module.exports = InscribedModule;
