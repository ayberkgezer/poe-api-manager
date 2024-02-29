const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Skill Gems.
 *
 * @class
 */
class GemModule {
  /**
   * The query URL for fetching Skill Gem data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of GemModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Skill Gem data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `gem${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Skill Gem data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Skill Gem data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Skill Gem data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Skill Gem data: ${error.message}`);
    }
  }
  /**
   * Asynchronously retrieves gems data based on the specified category name.
   *
   * @async
   * @param {string} categoryName - The name of the category to retrieve.
   * *  Possible values: "supportgem", "gems".
   * @returns {Promise<Array<Object>>} - A promise that resolves to the retrieved data.
   * @throws {Error} - Throws an error if there is an issue fetching or processing the gems data for the specified category.
   *
   */
  async getCategory(categoryName) {
    try {
      /**
       * Calls the getCategory function to fetch gems data based on category name.
       *
       * @type {Promise<Array<Object>>}
       */
      return getCategory(this.#queryUrl, categoryName);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the gems data for the specified category.
       *
       * @throws {Error}
       */
      throw new Error(
        `Error fetching data Skill Gem Category: ${error.message}`
      );
    }
  }
}

// Export the GemModule class
module.exports = GemModule;
