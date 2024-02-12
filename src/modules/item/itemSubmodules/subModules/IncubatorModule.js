const getData = require("../functions/getData");

class IncubatorModule {
  constructor(url) {
    this.url = url;
    this.type = "Incubator";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export IncubatorModule;
module.exports = IncubatorModule;
