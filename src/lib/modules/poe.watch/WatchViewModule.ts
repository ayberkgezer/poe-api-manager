import * as Modules from "./allModules/Modules";

/**
 * Represents a module for fetching data related to Watchstones and Watchstone Regions.
 */
export default class WatchViewModule {
  /**
   * Module for fetching data related to Currency.
   */
  public currency: Modules.CurrencyModule;

  /**
   * Module for fetching data related to Accessories.
   */
  public accessory: Modules.AccessoryModule;

  /**
   * Module for fetching data related to Armour.
   */
  public armour: Modules.ArmourModule;

  /**
   * Module for fetching data related to Base.
   */
  public base: Modules.BaseModule;

  /**
   * Module for fetching data related to Beast.
   */
  public beast: Modules.BeastModule;

  /**
   * Module for fetching data related to DeliriumOrb.
   */
  public deliriumOrb: Modules.DeliriumOrbModule;

  /**
   * Module for fetching data related to Divs.
   */
  public divs: Modules.DivsModule;

  /**
   * Module for fetching data related to Essence.
   */
  public essence: Modules.EssenceModule;

  /**
   * Module for fetching data related to Fossil.
   */
  public fossil: Modules.FossilModule;

  /**
   * Module for fetching data related to Fragment.
   */
  public fragment: Modules.FragmentModule;

  /**
   * Module for fetching data related to Map.
   */
  public map: Modules.MapModule;

  /**
   * Module for fetching data related to Flask.
   */
  public flask: Modules.FlaskModule;

  /**
   * Module for fetching data related to Jewel.
   */
  public jewel: Modules.JewelModule;

  /**
   * Module for fetching data related to Gem.
   */
  public gem: Modules.GemModule;

  /**
   * Module for fetching data related to Inscribed.
   */
  //public inscribed: Modules.InscribedModule;

  /**
   * Module for fetching data related to Invitation.
   */
  public invitation: Modules.InvitationModule;

  /**
   * Module for fetching data related to Oil.
   */
  public oil: Modules.OilModule;

  /**
   * Module for fetching data related to Scarab.
   */
  public scarab: Modules.ScarabModule;

  /**
   * Module for fetching data related to Sextant.
   */
  public sextant: Modules.SextantModule;

  /**
   * Module for fetching data related to UniqueMaps.
   */
  public uniqueMaps: Modules.UniqueMapsModule;

  /**
   * Module for fetching data related to Weapon.
   */
  public weapon: Modules.WeaponModule;

  /**
   * Creates an instance of WatchWievModule.
   * @param league - The league name to fetch data from.
   */
  constructor(league: string) {
    this.currency = new Modules.CurrencyModule(league);
    this.accessory = new Modules.AccessoryModule(league);
    this.armour = new Modules.ArmourModule(league);
    this.base = new Modules.BaseModule(league);
    this.beast = new Modules.BeastModule(league);
    this.essence = new Modules.EssenceModule(league);
    this.fossil = new Modules.FossilModule(league);
    this.fragment = new Modules.FragmentModule(league);
    this.map = new Modules.MapModule(league);
    this.flask = new Modules.FlaskModule(league);
    this.jewel = new Modules.JewelModule(league);
    this.gem = new Modules.GemModule(league);
    this.invitation = new Modules.InvitationModule(league);
    this.oil = new Modules.OilModule(league);
    this.scarab = new Modules.ScarabModule(league);
    this.sextant = new Modules.SextantModule(league);
    this.weapon = new Modules.WeaponModule(league);
    this.uniqueMaps = new Modules.UniqueMapsModule(league);
    this.deliriumOrb = new Modules.DeliriumOrbModule(league);
    this.divs = new Modules.DivsModule(league);
    //this.inscribed = new Modules.InscribedModule(league);- not now
  }
}
