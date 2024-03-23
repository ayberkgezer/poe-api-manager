const getData = require("./methods/getData");
const getQuickCurrency = require("./methods/getQuickCurrency");

/**
 * Represents a base class for interacting with data.
 */
class CurrencyBaseClass {
  /**
   * The league name for which data is requested.
   * @type {string}
   * @private
   */
  #league;

  /**
   * The type of data.
   * @type {string}
   * @private
   */
  #typeName;

  /**
   * Constructs a new CurrencyBaseClass instance.
   * @param {string} league - The league name for which data is requested.
   * @param {string} typeName - The type of data.
   */
  constructor(league, typeName) {
    this.#league = league;
    this.#typeName = typeName;
  }

  /**
   * Retrieves data based on the specified properties.
   * @async
   * @param {Array<string>} requestedProperties - The properties to include in the fetched data.
   * @returns {Promise<Array<Object>>} The fetched data in JSON format.
   * @throws {Error} If an error occurs during the data fetching process.
   */
  async getData(requestedProperties) {
    try {
      return await getData(this.#league, this.#typeName, requestedProperties);
    } catch (error) {
      throw new Error(`Error fetching CurrencyView data: ${error.message}`);
    }
  }
}

module.exports = CurrencyBaseClass;
