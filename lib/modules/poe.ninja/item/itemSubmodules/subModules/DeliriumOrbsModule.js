const getData = require("../functions/getData");

class DeliriumOrbsModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "DeliriumOrb";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export DeliriumOrbsModule;
module.exports = DeliriumOrbsModule;
