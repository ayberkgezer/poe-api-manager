const getData = require("../functions/getData");

class EssenceModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "Essence";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export EssenceModule;
module.exports = EssenceModule;
