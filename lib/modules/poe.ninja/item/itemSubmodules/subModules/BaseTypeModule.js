const getData = require("../functions/getData");

/**
 * Module for retrieving base type item information.
 * @class
 */
class BaseTypeModule {
  #url;
  #type;
  /**
   * Creates a new instance of BaseTypeModule.
   * @constructor
   * @param {string} url - The URL for fetching base type item information.
   */
  constructor(url) {
    /**
     * @type {string} #url - The URL for fetching base type item information.
     * @private
     */
    this.#url = url;

    /**
     * @type {string} #type - The type of item data (BaseType).
     * @private
     */
    this.#type = "BaseType";
  }

  /**
   * Asynchronously retrieves base type item information.
   *
   * @async
   * @method
   * @param {Array<string>} requestedProperties - An array of property names to include in the result.
   * @returns {Promise<Array<Object>>} A promise that resolves to the fetched item data.
   * @throws {Error} Throws an error if there's an issue with the data fetching process.
   *
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Base Type data.
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Base Type data.
       * @throws {Error}
       */
      throw new Error(`Error fetching Base Type data: ${error.message}`);
    }
  }
}

module.exports = BaseTypeModule;
