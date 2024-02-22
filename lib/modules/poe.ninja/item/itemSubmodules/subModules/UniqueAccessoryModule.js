const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Unique Accessories.
 *
 * @class
 */
class UniqueAccessoryModule {
  #url;
  #type;
  /**
   * Creates an instance of UniqueAccessoryModule.
   *
   * @param {string} url - The URL to fetch data from.
   */
  constructor(url) {
    /**
     * The URL for fetching data.
     *
     * @private
     * @type {string}
     */
    this.#url = url;

    /**
     * The type of data (UniqueAccessory in this case).
     *
     * @private
     * @type {string}
     */
    this.#type = "UniqueAccessory";
  }

  /**
   * Asynchronously retrieves data based on the specified properties.
   *
   * @async
   * @param {string[]} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

// Export the UniqueAccessoryModule class
module.exports = UniqueAccessoryModule;
