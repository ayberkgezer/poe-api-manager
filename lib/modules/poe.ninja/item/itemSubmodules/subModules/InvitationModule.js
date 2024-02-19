const getData = require("../functions/getData");

class InvitationModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "Invitation";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export InvitationModule;
module.exports = InvitationModule;
