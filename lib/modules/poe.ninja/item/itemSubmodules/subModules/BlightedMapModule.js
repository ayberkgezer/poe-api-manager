const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Blighted Maps.
 *
 * @class
 */
class BlightedMapModule {
  #url;
  #type;
  /**
   * Creates an instance of BlightedMapModule.
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
     * The type of data (BlightedMap in this case).
     *
     * @private
     * @type {string}
     */
    this.#type = "BlightedMap";
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

// Uncomment the line below if you want to export the BlightedMapModule class
module.exports = BlightedMapModule;
