const WatchBaseClass = require("../WatchBaseClass");
const urlGenerator = require("../watchUrlGenerator/urlGenerator");

/**
 * Subclass of WatchBaseClass for accessing invitation data.
 */
class InvitationModule extends WatchBaseClass {
  /**
   * The query URL for invitation data.
   * @type {string}
   * @private
   */
  #queryUrl;

  /**
   * Creates a new instance of InvitationModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league) {
    /**
     * The type of data being accessed (invitation).
     * @type {string}
     */
    const type = "invitation";
    super(league, type);
    this.#queryUrl = urlGenerator(league, type);
  }
}

module.exports = InvitationModule;
