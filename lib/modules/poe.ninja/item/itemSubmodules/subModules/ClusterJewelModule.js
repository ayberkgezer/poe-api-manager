const getData = require("../functions/getData");

class ClusterJewelModule {
  constructor(url) {
    this.url = url;
    this.type = "ClusterJewel";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export ClusterJewelModule;
module.exports = ClusterJewelModule;
