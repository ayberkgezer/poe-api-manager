const CurrencyBaseClass = require("../../CurrencyBaseClass");
const getQuickCurrency = require("../../methods/getQuickCurrency");

/**
 * Represents a module for interacting with currency data.
 * @extends CurrencyBaseClass
 */
class CurrencyModule extends CurrencyBaseClass {
  /**
   * The league name for which currency data is requested.
   * @type {string}
   * @private
   */
  #league;
  /**
   * The type name for which currency data is requested.
   * @type {string}
   * @private
   */
  #typeName;
  /**
   * Constructs a new CurrencyModule instance.
   * @param {string} league - The league name for which currency data is requested.
   */
  constructor(league) {
    /**
     * The type name for which currency data is requested.
     * @type {string}
     */
    const type = "Currency";
    super(league, type);
    this.#league = league;
    this.#typeName = type;
  }
  /**
   * Fetches quick currency data for a given currency ID. Defaults to "Divine Orb" if no ID is provided.
   * @param {string} currencyTypeName - The "currencyTypeName" of the currency to fetch data for. Defaults to "Divine Orb".
   * @returns {Promise<{currencyTypeName: string, chaosEquivalent: number}>} A promise that resolves with the currency data, including the currency type name and its chaos equivalent.
   * @throws {Error} Throws an error if fetching currency data fails.
   */
  async getQuickCurrency(currencyTypeName = "Divine Orb") {
    try {
      return await getQuickCurrency(
        this.#league,
        this.#typeName,
        currencyTypeName
      );
    } catch (error) {
      throw new Error(`Error fetching CurrencyData data: ${error.message}`);
    }
  }
}

module.exports = CurrencyModule;
