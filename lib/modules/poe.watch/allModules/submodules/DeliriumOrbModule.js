const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing delirium orb data.
 */
class DeliriumOrbModule extends WatchBaseClass {
  /**
   * The query URL for delirium orb data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * The type of data being accessed (deliriumOrb).
   * @type {string}
   * @private
   */
  type = "deliriumOrb";

  /**
   * Creates a new instance of DeliriumOrbModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (deliriumOrb).
     * @type {string}
     */
    const type = "deliriumOrb";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = DeliriumOrbModule;
