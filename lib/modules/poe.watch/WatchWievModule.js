const allModules = require("./allModules/Modules");

/**
 * Represents a module for fetching data related to Watchstones and Watchstone Regions.
 *
 * @class
 */
class WatchWievModule {
  /**
   * Creates an instance of WatchWievModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * Module for fetching data related to Currency.
     *
     */
    this.currency = new allModules.CurrencyModule(leagueUrl);

    // Uncomment the lines below if you want to use and document other modules
    // this.deliriumOrb = new allModules.DeliriumOrbModule(leagueUrl);
    // this.divinationCard = new allModules.DivsModule(leagueUrl);

    /**
     * Module for fetching data related to Essences.
     *
     */
    this.essence = new allModules.EssenceModule(leagueUrl);

    /**
     * Module for fetching data related to Fossils.
     *
     */
    this.fossil = new allModules.FossilModule(leagueUrl);

    /**
     * Module for fetching data related to Fragments.
     *
     */
    this.fragment = new allModules.FragmentModule(leagueUrl);

    /**
     * Module for fetching data related to Gems.
     *
     */
    this.gem = new allModules.GemModule(leagueUrl);

    // Uncomment the lines
    // this.inscribed = new allModules.InscribedModule(leagueUrl);

    /**
     * Module for fetching data related to Invitations.
     *
     */
    this.invitation = new allModules.InvitationModule(leagueUrl);

    /**
     * Module for fetching data related to Jewels.
     *
     */
    this.jewel = new allModules.JewelModule(leagueUrl);

    /**
     * Module for fetching data related to Maps.
     *
     */
    this.map = new allModules.MapModule(leagueUrl);

    /**
     * Module for fetching data related to Oils.
     *
     */
    this.oil = new allModules.OilModule(leagueUrl);

    /**
     * Module for fetching data related to Scarabs.
     *
     */
    this.scarab = new allModules.ScarabModule(leagueUrl);

    /**
     * Module for fetching data related to Sextants.
     *
     */
    this.sextant = new allModules.SextantModule(leagueUrl);

    // Uncomment the lines below if you want to use and document other modules
    // this.uniqueMap = new allModules.UniqueMapsModule(leagueUrl);

    /**
     * Module for fetching data related to Accessories.
     *
     */
    this.accessory = new allModules.AccessoryModule(leagueUrl);

    /**
     * Module for fetching data related to Armours.
     *
     */
    this.armour = new allModules.ArmourModule(leagueUrl);

    /**
     * Module for fetching data related to Weapons.
     *
     */
    this.weapon = new allModules.WeaponModule(leagueUrl);

    /**
     * Module for fetching data related to Flasks.
     *
     */
    this.flask = new allModules.FlaskModule(leagueUrl);

    /**
     * Module for fetching data related to Bases.
     *
     */
    this.base = new allModules.BaseModule(leagueUrl);

    /**
     * Module for fetching data related to Beasts.
     *
     */
    this.beast = new allModules.BeastModule(leagueUrl);
  }
}

// Export the WatchWievModule class
module.exports = WatchWievModule;
