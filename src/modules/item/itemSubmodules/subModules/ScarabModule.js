const getData = require("../functions/getData");

class ScarabModule {
  constructor(url) {
    this.url = url;
    this.type = "Scarab";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export ScarabModule;
module.exports = ScarabModule;
