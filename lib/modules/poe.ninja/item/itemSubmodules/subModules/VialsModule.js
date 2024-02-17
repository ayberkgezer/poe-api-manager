const getData = require("../functions/getData");

class VialsModule {
  constructor(url) {
    this.url = url;
    this.type = "Vial";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export VialsModule;
module.exports = VialsModule;
