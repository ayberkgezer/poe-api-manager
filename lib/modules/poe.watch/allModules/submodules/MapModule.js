const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing map data.
 */
class MapModule extends WatchBaseClass {
  /**
   * The query URL for map data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of MapModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (map).
     * @type {string}
     */
    const type = "map";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = MapModule;
