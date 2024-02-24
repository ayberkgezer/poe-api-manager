const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Accessories.
 *
 * @class
 */
class AccessoryModule {
  /**
   * The query URL for fetching accessory data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of AccessoryModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching accessory data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `accessory${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves accessory data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch accessory data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the accessory data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching accessory data: ${error.message}`);
    }
  }
}

// Export the AccessoryModule class
module.exports = AccessoryModule;
