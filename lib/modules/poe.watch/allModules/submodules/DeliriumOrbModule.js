const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Delirium Orbs.
 *
 * @class
 */
class DeliriumOrbModule {
  /**
   * The query URL for fetching Delirium Orb data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of DeliriumOrbModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Delirium Orb data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `currency${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Delirium Orb data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Delirium Orb data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Delirium Orb data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Delirium Orb data: ${error.message}`);
    }
  }
}

// Export the DeliriumOrbModule class
module.exports = DeliriumOrbModule;
