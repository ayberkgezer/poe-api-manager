const getData = require("../functions/getData");

class IncubatorModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "Incubator";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export IncubatorModule;
module.exports = IncubatorModule;
