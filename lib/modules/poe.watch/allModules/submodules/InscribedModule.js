const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing inscribed item data.
 */
class InscribedModule extends WatchBaseClass {
  /**
   * The query URL for inscribed item data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of InscribedModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (inscribed).
     * @type {string}
     */
    const type = "inscribed";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = InscribedModule;
