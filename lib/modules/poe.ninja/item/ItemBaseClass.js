const getData = require("./methods/getData");

class ItemBaseClass {
  /**
   * @type {string} The type of item to retrieve data for.
   * @private
   */
  #type;

  /**
   * @type {string} The name of the current league.
   * @private
   */
  #league;
  /**
   * Constructs an instance of ItemBaseClass.
   * @param {string} league - The name of the league to retrieve data for.
   * @param {string} typeName - The type of item to retrieve data for.
   */
  constructor(league, typeName) {
    this.#type = typeName;
    this.#league = league;
  }

  /**
   * Retrieves item data based on requested properties.
   * @param {string[]} requestedProperties - An array of properties to retrieve for each item.
   * @returns {Promise<Array<Object>>} A promise that resolves with the requested item data.
   * @throws {Error} If there is an error fetching the data.
   */
  async getData(requestedProperties) {
    try {
      return await getData(this.#league, this.#type, requestedProperties);
    } catch (error) {
      throw new Error(`Error fetching ItemOverView data: ${error.message}`);
    }
  }
}

module.exports = ItemBaseClass;
