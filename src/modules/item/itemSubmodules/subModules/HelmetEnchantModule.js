const getData = require("../functions/getData");

class HelmetEnchantModule {
  constructor(url) {
    this.url = url;
    this.type = "HelmetEnchant";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export HelmetEnchantModule;
module.exports = HelmetEnchantModule;
