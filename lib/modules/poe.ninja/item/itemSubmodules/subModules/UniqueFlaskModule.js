const getData = require("../functions/getData");

class UniqueFlaskModule {
  constructor(url) {
    this.url = url;
    this.type = "UniqueFlask";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export UniqueMapModule;
module.exports = UniqueFlaskModule;
