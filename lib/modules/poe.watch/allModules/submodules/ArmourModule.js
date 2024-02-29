const getData = require("../functions/getData");
const getCategory = require("../functions/getCategory");

/**
 * Represents a module for fetching data related to Armour.
 *
 * @class
 */
class ArmourModule {
  /**
   * The query URL for fetching armour data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of ArmourModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching armour data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `armour${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves armour data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch armour data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the armour data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching armour data: ${error.message}`);
    }
  }
  /**
   * Asynchronously retrieves armour data based on the specified category name.
   *
   * @async
   * @param {string} categoryName - The name of the category to retrieve.
   * *   Possible values: "chest", "bodyarmours", "shield", "boots", "gloves", "shields", "helmets", "quiver".
   * @returns {Promise<Array<Object>>} - A promise that resolves to the retrieved data.
   * @throws {Error} - Throws an error if there is an issue fetching or processing the armour data for the specified category.
   *
   */
  async getCategory(categoryName) {
    try {
      /**
       * Calls the getCategory function to fetch armour data based on category name.
       *
       * @type {Promise<Array<Object>>}
       */
      return getCategory(this.#queryUrl, categoryName);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the armour data for the specified category.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching data Armour Category: ${error.message}`);
    }
  }
}

// Export the ArmourModule class
module.exports = ArmourModule;
