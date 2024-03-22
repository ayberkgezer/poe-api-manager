const getData = require("./methods/getData");

class ItemBaseClass {
  /**
   * @type {string} The URL used for retrieving item data.
   * @private
   */
  #url;

  /**
   * @type {string} The type of item to retrieve data for.
   * @private
   */
  #type;

  /**
   * @type {string} The base URL for poe.watch.
   * @private
   */
  #baseurl;
  /**
   * Constructs an instance of ItemBaseClass.
   * @param {string} league - The name of the league to retrieve data for.
   * @param {string} typeName - The type of item to retrieve data for.
   */
  constructor(league, typeName) {
    /**
     * The URL used for retrieving item data.
     * @type {string}
     * @private
     */
    this.#url = `${this.#baseurl}itemoverview?league=${league}`;

    /**
     * The type of item to retrieve data for.
     * @type {string}
     * @private
     */
    this.#type = `&type=${typeName}`;

    /**
     * The base URL for poe.watch.
     * @type {string}
     * @private
     */
    this.#baseurl = "https://poe.ninja/api/data/";
  }

  /**
   * Retrieves item data based on requested properties.
   * @param {string[]} requestedProperties - An array of properties to retrieve for each item.
   * @returns {Promise<Array<Object>>} A promise that resolves with the requested item data.
   * @throws {Error} If there is an error fetching the data.
   */
  async getData(requestedProperties) {
    try {
      return await getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      throw new Error(`Error fetching ItemOverView data: ${error.message}`);
    }
  }
}

module.exports = ItemBaseClass;
