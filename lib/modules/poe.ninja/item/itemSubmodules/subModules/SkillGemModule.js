const getData = require("../functions/getData");

class SkillGemModule {
  constructor(url) {
    this.url = url;
    this.type = "SkillGem";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export SkillGemModule;
module.exports = SkillGemModule;
