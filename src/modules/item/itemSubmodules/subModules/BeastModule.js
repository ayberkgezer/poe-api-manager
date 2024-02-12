const getData = require("../functions/getData");

class BeastModule {
  constructor(url) {
    this.url = url;
    this.type = "Beast";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export BeastModule;
module.exports = BeastModule;
