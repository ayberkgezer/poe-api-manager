const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing beast data.
 */
class BeastModule extends WatchBaseClass {
  /**
   * The query URL for beast data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of BeastModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (beast).
     * @type {string}
     */
    const type = "beast";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = BeastModule;
