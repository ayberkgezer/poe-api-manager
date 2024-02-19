const getData = require("../functions/getData");

class ResonatorModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "Resonator";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export ResonatorModule;
module.exports = ResonatorModule;
