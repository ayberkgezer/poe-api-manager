const getData = require("../functions/getData");

class UniqueJewelModule {
  constructor(url) {
    this.url = url;
    this.type = "UniqueJewel";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export UniqueJewelModule;
module.exports = UniqueJewelModule;