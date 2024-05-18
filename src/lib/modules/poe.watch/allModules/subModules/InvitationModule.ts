import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing invitation data.
 */
class InvitationModule extends PoeWatch {
  /**
   * Creates a new instance of InvitationModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "invitation";
    super(league, type);
  }
}

export default InvitationModule;
