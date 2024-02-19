const getData = require("../functions/getData");

class BlightedMapModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "BlightedMap";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export BlightedMapModule;
module.exports = BlightedMapModule;
