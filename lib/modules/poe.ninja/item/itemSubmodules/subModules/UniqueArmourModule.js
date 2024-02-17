const getData = require("../functions/getData");

class UniqueArmourModule {
  constructor(url) {
    this.url = url;
    this.type = "UniqueArmour";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export UniqueArmourModule;
module.exports = UniqueArmourModule;
