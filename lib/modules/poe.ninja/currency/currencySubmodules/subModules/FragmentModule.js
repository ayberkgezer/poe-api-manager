const getData = require("../functions/getData");

/**
 * Represents a submodule for retrieving fragment information.
 * @class
 */
class FragmentModule {
  #url; // eslint-disable-line
  #type; // eslint-disable-line
  /**
   * Creates a new instance of FragmentModule.
   * @constructor
   * @param {string} url - The URL for retrieving fragment information.
   */
  constructor(url) {
    /**
     * @type {string} #url - The URL for retrieving fragment information.
     * @private
     */
    this.#url = url;

    /**
     * @type {string} #type - The type of data (in this case, "Fragment").
     * @private
     */
    this.#type = "Fragment";
  }

  /**
   * Asynchronously fetches fragment data from the specified URL.
   *
   * @param {Array<string>} [requestedProperties] - (Optional) An array of property names to include in the filtered result.
   * @returns {Promise<Array<Object>|Object>} - A promise that resolves to the fetched fragment data, or a filtered subset based on requested properties.
   * @throws {Error} - Throws an error if there's an issue fetching or processing the fragment data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch fragment data.
       * @type {Promise<Array<Object>|Object>}
       */
      return getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the fragment data.
       * @throws {Error}
       */
      throw new Error(`Error fetching fragment data: ${error.message}`);
    }
  }
}

// Export the FragmentModule class.
module.exports = FragmentModule;
