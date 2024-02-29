const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Invitations.
 *
 * @class
 */
class InvitationModule {
  /**
   * The query URL for fetching Invitation data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of InvitationModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Invitation data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `invitation${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Invitation data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Invitation data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Invitation data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Invitation data: ${error.message}`);
    }
  }
}

// Export the InvitationModule class
module.exports = InvitationModule;