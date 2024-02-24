const getData = require("../functions/getData");

/**
 * Module for retrieving information about beasts.
 * @class
 */
class BeastModule {
  #url;
  #type;
  /**
   * Creates a new instance of BeastModule.
   * @constructor
   * @param {string} url - The URL for fetching beast information.
   */
  constructor(url) {
    /**
     * @type {string} #url - The URL for fetching beast information.
     * @private
     */
    this.#url = url;

    /**
     * @type {string} #type - The type of data (Beast).
     * @private
     */
    this.#type = "Beast";
  }

  /**
   * Asynchronously retrieves beast information.
   *
   * @async
   * @method
   * @param {Array<string>} requestedProperties - An array of property names to include in the result.
   * @returns {Promise<Array<Object>>} A promise that resolves to the fetched beast data.
   * @throws {Error} Throws an error if there's an issue with the data fetching process.
   *
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Beast data.
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Beast data.
       * @throws {Error}
       */
      throw new Error(`Error fetching Beast data: ${error.message}`);
    }
  }
}

module.exports = BeastModule;
