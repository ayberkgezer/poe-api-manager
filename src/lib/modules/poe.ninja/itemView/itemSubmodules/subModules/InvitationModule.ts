import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling invitations.
 */
class InvitationModule extends PoeNinja {
  /**
   * Creates an instance of InvitationModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Invitation";
    super(league, typeName, type);
  }
}

export default InvitationModule;
