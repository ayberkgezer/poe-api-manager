const getData = require("../functions/getData");

class CurrencyModule {
  #url;
  #type;

  constructor(url) {
    this.#url = url;
    this.#type = "Currency";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export CurrencyModule;
module.exports = CurrencyModule;
