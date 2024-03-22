const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing unique maps data.
 */
class UniqueMapsModule extends WatchBaseClass {
  /**
   * The query URL for unique maps data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of UniqueMapsModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (uniqueMaps).
     * @type {string}
     */
    const type = "uniqueMaps";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = UniqueMapsModule;
