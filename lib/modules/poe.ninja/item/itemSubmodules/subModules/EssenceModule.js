const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Essences.
 *
 * @class
 */
class EssenceModule {
  #url;
  #type;
  /**
   * Creates an instance of EssenceModule.
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
     * The type of data (Essence in this case).
     *
     * @private
     * @type {string}
     */
    this.#type = "Essence";
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

// Export the EssenceModule class
module.exports = EssenceModule;
