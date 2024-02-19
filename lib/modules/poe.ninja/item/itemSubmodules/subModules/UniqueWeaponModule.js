const getData = require("../functions/getData");

class UniqueWeaponModule {
  #url;
  #type;
  constructor(url) {
    this.#url = url;
    this.#type = "UniqueWeapon";
  }

  async getData(requestedProperties) {
    return getData(this.#url, this.#type, requestedProperties);
  }
}

//export UniqueWeaponModule;
module.exports = UniqueWeaponModule;
