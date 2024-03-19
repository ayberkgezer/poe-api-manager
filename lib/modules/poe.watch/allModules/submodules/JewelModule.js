const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing jewel data.
 */
class JewelModule extends WatchBaseClass {
  /**
   * The query URL for jewel data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of JewelModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (jewel).
     * @type {string}
     */
    const type = "jewel";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = JewelModule;
