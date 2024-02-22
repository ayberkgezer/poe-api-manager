const getData = require("../functions/getData");

/**
 * Module for retrieving base type item information.
 * @class
 */
class BaseTypeModule {
  #url; // eslint-disable-line
  #type; // eslint-disable-line
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
   * @param {Array<string>} requestedProperties - An array of property names to include in the result.
   * @returns {Promise<Array<Object>|Object>} - A promise that resolves to the fetched item data.
   */
  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

// Export the BaseTypeModule class.
module.exports = BaseTypeModule;
