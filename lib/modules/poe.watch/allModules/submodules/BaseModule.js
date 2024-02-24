const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Bases.
 *
 * @class
 */
class BaseModule {
  /**
   * The query URL for fetching base data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of BaseModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching base data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `bases${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves base data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch base data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the base data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching base data: ${error.message}`);
    }
  }
}

// Export the BaseModule class
module.exports = BaseModule;
