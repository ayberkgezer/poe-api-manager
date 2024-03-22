const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing scarab data.
 */
class ScarabModule extends WatchBaseClass {
  /**
   * The query URL for scarab data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of ScarabModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (scarab).
     * @type {string}
     */
    const type = "scarab";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = ScarabModule;
