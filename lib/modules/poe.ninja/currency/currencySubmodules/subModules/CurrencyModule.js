const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Currency.
 *
 * @class
 */
class CurrencyModule {
  /**
   * The URL for fetching data.
   *
   * @private
   * @type {string}
   */
  #url;

  /**
   * The type of data (Currency in this case).
   *
   * @private
   * @type {string}
   */
  #type;

  /**
   * Creates an instance of CurrencyModule.
   *
   * @param {string} url - The URL to fetch data from.
   */
  constructor(url) {
    this.#url = url;
    this.#type = "Currency";
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
       * Calls the getData function to fetch Currency data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Currency data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Currency data: ${error.message}`);
    }
  }
}

module.exports = CurrencyModule;
