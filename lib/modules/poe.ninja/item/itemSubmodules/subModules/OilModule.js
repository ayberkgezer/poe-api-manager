const getData = require("../functions/getData");

class OilModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "Oil";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export OilModule;
module.exports = OilModule;
