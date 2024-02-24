const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Resonators.
 *
 * @class
 */
class ResonatorModule {
  /**
   * The URL for fetching data.
   *
   * @private
   * @type {string}
   */
  #url;

  /**
   * The type of data (Resonator in this case).
   *
   * @private
   * @type {string}
   */
  #type;

  /**
   * Creates an instance of ResonatorModule.
   *
   * @param {string} url - The URL to fetch data from.
   */
  constructor(url) {
    this.#url = url;
    this.#type = "Resonator";
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
       * Calls the getData function to fetch Resonator data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Resonator data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Resonator data: ${error.message}`);
    }
  }
}

module.exports = ResonatorModule;
