const WatchBaseClass = require("../WatchBaseClass");
const getCategory = require("../methods/getCategory");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing weapon data.
 */
class WeaponModule extends WatchBaseClass {
  /**
   * The query URL for weapon data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of WeaponModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (weapon).
     * @type {string}
     */
    const type = "weapon";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }

  /**
   * Retrieves category data for weapons.
   * @async
   * @param {string} categoryName - The name of the category to retrieve.
   * *   Possible values: "twohandswords", "fishingrods", "onehandswords", "twohandaxes", "staves", "warstaff", "daggers", "scepters".
   * @returns {Promise<Array<Object>>} - A Promise containing data for the specified category.
   * @throws {Error} - Throws errors encountered while fetching data.
   */
  async getCategory(categoryName) {
    try {
      return await getCategory(this.#queryUrl, categoryName);
    } catch (error) {
      throw new Error(`Error fetching Weapon data: ${error.message}`);
    }
  }
}

module.exports = WeaponModule;
