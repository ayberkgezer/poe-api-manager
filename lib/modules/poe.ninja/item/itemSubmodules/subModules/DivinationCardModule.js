const getData = require("../functions/getData");

class DivinationCardModule {
  constructor(url) {
    this.url = url;
    this.type = "DivinationCard";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export DivinationCardModule;
module.exports = DivinationCardModule;