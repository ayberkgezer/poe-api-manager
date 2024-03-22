const getData = require("./methods/getData");
const urlGenerator = require("./watchUrlGenerator/urlGenerator");

/**
 * Basic class for handling data retrieval.
 */
class WatchBaseClass {
  /**
   * Private field to store the query URL.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of WatchBaseClass.
   * @param {string} league - The league from which the data will be fetched.
   * @param {string} type - The type of data to be fetched.
   */
  constructor(league, type) {
    /**
     * Function that generates the query URL.
     * @type {Function}
     * @private
     */
    this.#queryUrl = urlGenerator(league, type);
  }

  /**
   * Executes queries to fetch data.
   * @async
   * @param {Array<string>} requestedProperties - List of properties to be fetched.
   * @returns {Promise<Array<Object>>} - A Promise containing an object with the requested properties.
   * @throws {Error} - Throws errors encountered while fetching data.
   */
  async getData(requestedProperties) {
    try {
      return await getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      throw new Error(`Error fetching WatchView data: ${error.message}`);
    }
  }
}

module.exports = WatchBaseClass;
