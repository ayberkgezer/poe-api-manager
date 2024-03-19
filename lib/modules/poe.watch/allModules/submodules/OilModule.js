const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing oil data.
 */
class OilModule extends WatchBaseClass {
  /**
   * The query URL for oil data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of OilModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (oil).
     * @type {string}
     */
    const type = "oil";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = OilModule;
