const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling invitations.
 * @extends ItemBaseClass
 */
class InvitationModule extends ItemBaseClass {
  /**
   * Creates an instance of InvitationModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Invitation");
  }
}

module.exports = InvitationModule;
