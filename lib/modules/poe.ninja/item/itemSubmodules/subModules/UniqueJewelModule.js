const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Unique Jewels.
 *
 * @class
 */
class UniqueJewelModule {
  /**
   * The URL for fetching data.
   *
   * @private
   * @type {string}
   */
  #url;

  /**
   * The type of data (UniqueJewel in this case).
   *
   * @private
   * @type {string}
   */
  #type;

  /**
   * Creates an instance of UniqueJewelModule.
   *
   * @param {string} url - The URL to fetch data from.
   */
  constructor(url) {
    this.#url = url;
    this.#type = "UniqueJewel";
  }

  /**
   * Asynchronously retrieves data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch UniqueJewel data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the UniqueJewel data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching UniqueJewel data: ${error.message}`);
    }
  }
}

module.exports = UniqueJewelModule;
