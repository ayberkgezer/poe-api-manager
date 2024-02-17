const getData = require("../functions/getData");

class BaseTypeModule {
  constructor(url) {
    this.url = url;
    this.type = "BaseType";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export BaseTypeModule;
module.exports = BaseTypeModule;
