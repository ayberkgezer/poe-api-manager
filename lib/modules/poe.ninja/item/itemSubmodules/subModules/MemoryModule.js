const getData = require("../functions/getData");

class MemoryModule {
  constructor(url) {
    this.url = url;
    this.type = "Memory";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export MemoryModule;
module.exports = MemoryModule;
