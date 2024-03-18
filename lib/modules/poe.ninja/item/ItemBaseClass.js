const getData = require("./itemSubmodules/functions/getData");

class ItemBaseClass {
  #url;
  #type;
  #baseurl = "https://poe.ninja/api/data/";
  constructor(league, typeName) {
    this.#url = `${this.#baseurl}itemoverview?league=${league}`;
    this.#type = `&type=${typeName}`;
  }
  async getData(requestedProperties) {
    try {
      return await getData(this.#url, this.#type, requestedProperties);
    } catch (error) {
      throw new Error(`Error fetching ItemOverView data: ${error.message}`);
    }
  }
}

module.exports = ItemBaseClass;
