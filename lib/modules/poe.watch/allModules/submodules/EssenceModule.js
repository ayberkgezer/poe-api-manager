const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing essence data.
 */
class EssenceModule extends WatchBaseClass {
  /**
   * The query URL for essence data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of EssenceModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (essence).
     * @type {string}
     */
    const type = "essence";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = EssenceModule;
