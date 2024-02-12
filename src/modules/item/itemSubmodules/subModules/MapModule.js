const getData = require("../functions/getData");

class MapModule {
  constructor(url) {
    this.url = url;
    this.type = "Map";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export MapModule;
module.exports = MapModule;
