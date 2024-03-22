const WatchBaseClass = require("../WatchBaseClass");
const getCategory = require("../methods/getCategory");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing base data.
 */
class BaseModule extends WatchBaseClass {
  /**
   * The query URL for base data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of BaseModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (bases).
     * @type {string}
     */
    const type = "bases";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }

  /**
   * Retrieves category data for bases.
   * @async
   * @param {string} categoryName - The name of the category to retrieve.
   * *  Possible values: "armour", "weapons", "accessories".
   * @returns {Promise<Array<Object>>} - A Promise containing data for the specified category.
   * @throws {Error} - Throws errors encountered while fetching data.
   */
  async getCategory(categoryName) {
    try {
      return await getCategory(this.#queryUrl, categoryName);
    } catch (error) {
      throw new Error(`Error fetching Base data: ${error.message}`);
    }
  }
}

module.exports = BaseModule;
