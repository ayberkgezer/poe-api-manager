const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Unique Accessories.
 *
 * @class
 */
class UniqueAccessoryModule {
  /**
   * The URL for fetching data.
   *
   * @private
   * @type {string}
   */
  #url;

  /**
   * The type of data (UniqueAccessory in this case).
   *
   * @private
   * @type {string}
   */
  #type;

  /**
   * Creates an instance of UniqueAccessoryModule.
   *
   * @param {string} url - The URL to fetch data from.
   */
  constructor(url) {
    this.#url = url;
    this.#type = "UniqueAccessory";
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
       * Calls the getData function to fetch UniqueAccessory data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the UniqueAccessory data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching UniqueAccessory data: ${error.message}`);
    }
  }
}

module.exports = UniqueAccessoryModule;
