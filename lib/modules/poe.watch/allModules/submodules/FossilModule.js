const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing fossil data.
 */
class FossilModule extends WatchBaseClass {
  /**
   * The query URL for fossil data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of FossilModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (fossil).
     * @type {string}
     */
    const type = "fossil";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = FossilModule;
