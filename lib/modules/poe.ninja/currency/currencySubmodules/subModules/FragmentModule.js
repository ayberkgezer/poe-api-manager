const getData = require("../functions/getData");

class FragmentModule {
  #url;
  #type;

  constructor(url) {
    this.#url = url;
    this.#type = "Fragment";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export FragmentModule;
module.exports = FragmentModule;
