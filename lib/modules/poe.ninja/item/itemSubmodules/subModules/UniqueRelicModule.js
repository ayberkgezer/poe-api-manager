const getData = require("../functions/getData");

class UniqueRelicModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "UniqueRelic";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export UniqueRelicModule;
module.exports = UniqueRelicModule;
