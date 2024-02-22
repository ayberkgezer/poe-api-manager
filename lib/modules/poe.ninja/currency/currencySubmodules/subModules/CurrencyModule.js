const getData = require("../functions/getData");

/**
 * Represents a module for retrieving currency-related information.
 * @class
 */
class CurrencyModule {
  #url; // eslint-disable-line
  #type; // eslint-disable-line
  /**
   * Creates a new instance of CurrencyModule.
   * @constructor
   * @param {string} url - The URL for fetching currency-related information.
   */
  constructor(url) {
    /**
     * @type {string} #url - The URL for fetching currency-related information.
     * @private
     */
    this.#url = url;

    /**
     * @type {string} #type - The type of data (Currency).
     * @private
     */
    this.#type = "Currency";
  }

  /**
   * Asynchronously retrieves currency-related information.
   *
   * @param {Array<string>} requestedProperties - An array of property names to include in the result.
   * @returns {Promise<Array<Object>|Object>} - A promise that resolves to the fetched data, or a filtered subset based on requested properties.
   */
  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

// Export the CurrencyModule class.
module.exports = CurrencyModule;
