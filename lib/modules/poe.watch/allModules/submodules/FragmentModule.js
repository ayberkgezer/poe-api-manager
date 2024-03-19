const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing fragment data.
 */
class FragmentModule extends WatchBaseClass {
  /**
   * The query URL for fragment data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of FragmentModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (fragment).
     * @type {string}
     */
    const type = "fragment";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = FragmentModule;
