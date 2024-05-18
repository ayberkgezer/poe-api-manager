import WatchWievModule from "./modules/poe.watch/WatchViewModule";

/**
 * Represents an API for interacting with a poe.watch service.
 */
export class WatchAPI {
  /**
   * The WatchWievModule instance associated with this API.
   */
  public view: WatchWievModule;

  /**
   * Creates an instance of WatchAPI.
   * @param league - The league for which the API should be initialized.
   */
  constructor(league: string) {
    this.view = new WatchWievModule(league);
  }
}
