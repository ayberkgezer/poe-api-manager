const getData = require("../functions/getData");

class OmenModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "Omen";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export OmenModule;
module.exports = OmenModule;
