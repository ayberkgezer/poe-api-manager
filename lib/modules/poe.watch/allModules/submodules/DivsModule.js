const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing divination card data.
 */
class DivModule extends WatchBaseClass {
  /**
   * The query URL for divination card data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of DivModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (div).
     * @type {string}
     */
    const type = "div";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = DivModule;
