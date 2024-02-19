const getData = require("../functions/getData");

class UniqueAccessoryModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "UniqueAccessory";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export UniqueAccessoryModule;
module.exports = UniqueAccessoryModule;
