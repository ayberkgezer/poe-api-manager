const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing currency data.
 */
class CurrencyModule extends WatchBaseClass {
  /**
   * The query URL for currency data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of CurrencyModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (currency).
     * @type {string}
     */
    const type = "currency";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = CurrencyModule;
