const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Fossils.
 *
 * @class
 */
class FossilModule {
  /**
   * The URL for fetching data.
   *
   * @private
   * @type {string}
   */
  #url;

  /**
   * The type of data (Fossil in this case).
   *
   * @private
   * @type {string}
   */
  #type;

  /**
   * Creates an instance of FossilModule.
   *
   * @param {string} url - The URL to fetch data from.
   */
  constructor(url) {
    this.#url = url;
    this.#type = "Fossil";
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
       * Calls the getData function to fetch Fossil data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Fossil data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Fossil data: ${error.message}`);
    }
  }
}

module.exports = FossilModule;
