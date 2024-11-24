import WatchViewModule from "./modules/poe.watch/WatchViewModule";

/**
 * Represents an API for interacting with a poe.watch service.
 * @class
 */
export class WatchAPI {
  /**
   * The WatchViewModule instance associated with this API.
   * @type {WatchViewModule}
   */
  public view: WatchViewModule;

  /**
   * Creates an instance of WatchAPI.
   * @param {string} league - The league for which the API should be initialized.
   */
  constructor(league: string) {
    this.view = new WatchViewModule(league);
  }
}
