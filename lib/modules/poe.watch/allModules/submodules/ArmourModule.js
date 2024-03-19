const WatchBaseClass = require("../WatchBaseClass");
const getCategory = require("../methods/getCategory");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing armour data.
 */
class ArmourModule extends WatchBaseClass {
  /**
   * The query URL for armour data.
   * @type {string}
   * @private
   */
  #queryUrl;
  /**
   * Creates a new instance of ArmourModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (armour).
     * @type {string}
     */
    const type = "armour";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }

  /**
   * Retrieves category data for armour.
   * @async
   * @param {string} categoryName - The name of the category to retrieve.
   * *   Possible values: "chest", "bodyarmours", "shield", "boots", "gloves", "shields", "helmets", "quiver".
   * @returns {Promise<Array<Object>>} - A Promise containing data for the specified category.
   * @throws {Error} - Throws errors encountered while fetching data.
   */
  async getCategory(categoryName) {
    try {
      return await getCategory(this.#queryUrl, categoryName);
    } catch (error) {
      throw new Error(`Error fetching Armour data: ${error.message}`);
    }
  }
}

module.exports = ArmourModule;
