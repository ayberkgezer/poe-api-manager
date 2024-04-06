const ItemBaseClass = require("../../ItemBaseClass");

class CoffinModule extends ItemBaseClass {
  constructor(league, type = "Coffin") {
    super(league, type);
  }
}

module.exports = CoffinModule;
