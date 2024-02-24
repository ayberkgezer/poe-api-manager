const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Flasks.
 *
 * @class
 */
class FlaskModule {
  /**
   * The query URL for fetching Flask data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of FlaskModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Flask data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `flask${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Flask data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Flask data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Flask data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Flask data: ${error.message}`);
    }
  }
}

// Export the FlaskModule class
module.exports = FlaskModule;
