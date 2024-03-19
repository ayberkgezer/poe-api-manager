const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing sextant data.
 */
class SextantModule extends WatchBaseClass {
  /**
   * The query URL for sextant data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of SextantModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (sextants).
     * @type {string}
     */
    const type = "sextants";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = SextantModule;
