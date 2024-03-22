const WatchBaseClass = require("../WatchBaseClass");
const getCategory = require("../methods/getCategory");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing gem data.
 */
class GemModule extends WatchBaseClass {
  /**
   * The query URL for gem data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of GemModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (gem).
     * @type {string}
     */
    const type = "gem";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }

  /**
   * Retrieves category data for gems.
   * @async
   * @param {string} categoryName - The name of the category to retrieve.
   * @returns {Promise<Array<Object>>} - A Promise containing data for the specified category.
   * @throws {Error} - Throws errors encountered while fetching data.
   */
  async getCategory(categoryName) {
    try {
      return await getCategory(this.#queryUrl, categoryName);
    } catch (error) {
      throw new Error(`Error fetching Gem data: ${error.message}`);
    }
  }
}

module.exports = GemModule;
