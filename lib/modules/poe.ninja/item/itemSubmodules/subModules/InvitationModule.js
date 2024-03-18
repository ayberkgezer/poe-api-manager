const ItemBaseClass = require("../../ItemBaseClass");

class InvitationModule extends ItemBaseClass {
  constructor(league) {
    super(league, "Invitation");
  }
}

module.exports = InvitationModule;
