const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing flask data.
 */
class FlaskModule extends WatchBaseClass {
  /**
   * The query URL for flask data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of FlaskModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (flask).
     * @type {string}
     */
    const type = "flask";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = FlaskModule;
