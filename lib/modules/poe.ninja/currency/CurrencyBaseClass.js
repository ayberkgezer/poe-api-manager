const getData = require("./methods/getData");

/**
 * Represents a base class for interacting with data.
 */
class CurrencyBaseClass {
  #url;
  #type;
  #baseurl = "https://poe.ninja/api/data/";

  /**
   * Constructs a new CurrencyBaseClass instance.
   * @param {string} league - The league name for which data is requested.
   * @param {string} typeName - The type of data.
   */
  constructor(league, typeName) {
    this.#url = `${this.#baseurl}currencyoverview?league=${league}`;
    this.#type = `&type=${typeName}`;
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
      return await getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      throw new Error(`Error fetching CurrencyView data: ${error.message}`);
    }
  }
}

module.exports = CurrencyBaseClass;
