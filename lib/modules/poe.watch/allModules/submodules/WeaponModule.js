const getData = require("../functions/getData");
const getCategory = require("../functions/getCategory");

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
  /**
   * Asynchronously retrieves weapon data based on the specified category name.
   *
   * @async
   * @param {string} categoryName - The name of the category to retrieve.
   * *   Possible values: "twohandswords", "fishingrods", "onehandswords", "twohandaxes", "staves", "warstaff", "daggers", "scepters".
   * @returns {Promise<Array<Object>>} - A promise that resolves to the retrieved data.
   * @throws {Error} - Throws an error if there is an issue fetching or processing the weapon data for the specified category.
   *
   */
  async getCategory(categoryName) {
    try {
      /**
       * Calls the getCategory function to fetch weapon data based on category name.
       *
       * @type {Promise<Array<Object>>}
       */
      return getCategory(this.#queryUrl, categoryName);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the weapon data for the specified category.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching data Weapon Category: ${error.message}`);
    }
  }
}

// Export the WeaponModule class
module.exports = WeaponModule;
