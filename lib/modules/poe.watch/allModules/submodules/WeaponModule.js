const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Weapons.
 *
 * @class
 */
class WeaponModule {
  /**
   * The query URL for fetching Weapon data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of WeaponModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Weapon data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `weapon${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Weapon data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Weapon data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Weapon data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Weapon data: ${error.message}`);
    }
  }
}

// Export the WeaponModule class
module.exports = WeaponModule;
