const getData = require("../functions/getData");

class UniqueMapModule {
  constructor(url) {
    this.url = url;
    this.type = "UniqueMap";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export UniqueMapModule;
module.exports = UniqueMapModule;
