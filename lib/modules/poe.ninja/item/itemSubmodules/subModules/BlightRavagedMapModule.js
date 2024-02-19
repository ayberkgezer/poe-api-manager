const getData = require("../functions/getData");

class BlightRavagedMapModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "BlightRavagedMap";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export BlightRavagedMapModule;
module.exports = BlightRavagedMapModule;
