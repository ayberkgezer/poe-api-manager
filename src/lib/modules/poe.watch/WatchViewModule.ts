import { CurrencyModule, AccessoryModule, ArmourModule, BaseModule, BeastModule, DeliriumOrbModule, DivsModule, EssenceModule, FossilModule, FragmentModule, MapModule, FlaskModule, JewelModule, GemModule, InscribedModule, InvitationModule, OilModule, ScarabModule, SextantModule, UniqueMapsModule, WeaponModule } from "./allModules/Modules";

/**
 * Represents a module for fetching data related to Watchstones and Watchstone Regions.
 */
export class WatchWievModule {
  /**
   * Module for fetching data related to Currency.
   */
  public currency: CurrencyModule;

  /**
   * Module for fetching data related to Accessories.
   */
  public accessory: AccessoryModule;
  
  /**
   * Module for fetching data related to Armour.
   */
  public armour: ArmourModule;

  /**
   * Module for fetching data related to Base.
   */
  public base: BaseModule;

  /**
   * Module for fetching data related to Beast.
   */
  public beast: BeastModule;

  /**
   * Module for fetching data related to DeliriumOrb.
   */
  //public deliriumOrb: DeliriumOrbModule;

  /**
   * Module for fetching data related to Divs.
   */
  //public divs: DivsModule;

  /**
   * Module for fetching data related to Essence.
   */
  public essence: EssenceModule;

  /**
   * Module for fetching data related to Fossil.
   */
  public fossil: FossilModule;

  /**
   * Module for fetching data related to Fragment.
   */
  public fragment: FragmentModule;

  /**
   * Module for fetching data related to Map.
   */
  public map: MapModule;

  /**
   * Module for fetching data related to Flask.
   */
  public flask: FlaskModule;

  /**
   * Module for fetching data related to Jewel.
   */
  public jewel: JewelModule;

  /**
   * Module for fetching data related to Gem.
   */
  public gem: GemModule;

  /**
   * Module for fetching data related to Inscribed.
   */
  //public inscribed: InscribedModule;

  /**
   * Module for fetching data related to Invitation.
   */
  public invitation: InvitationModule;

  /**
   * Module for fetching data related to Oil.
   */
  public oil: OilModule;

  /**
   * Module for fetching data related to Scarab.
   */
  public scarab: ScarabModule;

  /**
   * Module for fetching data related to Sextant.
   */
  public sextant: SextantModule;

  /**
   * Module for fetching data related to UniqueMaps.
   */
  //public uniqueMaps: UniqueMapsModule;

  /**
   * Module for fetching data related to Weapon.
   */
  public weapon: WeaponModule;

  /**
   * Creates an instance of WatchWievModule.
   * @param league - The league name to fetch data from.
   */
  constructor(league: string) {
    this.currency = new CurrencyModule(league);
    this.accessory = new AccessoryModule(league);
    this.armour = new ArmourModule(league);
    this.base = new BaseModule(league);
    this.beast = new BeastModule(league);
    //this.deliriumOrb = new DeliriumOrbModule(league);
    //this.divs = new DivsModule(league);
    this.essence = new EssenceModule(league);
    this.fossil = new FossilModule(league);
    this.fragment = new FragmentModule(league);
    this.map = new MapModule(league);
    this.flask = new FlaskModule(league);
    this.jewel = new JewelModule(league);
    this.gem = new GemModule(league);
    //this.inscribed = new InscribedModule(league);
    this.invitation = new InvitationModule(league);
    this.oil = new OilModule(league);
    this.scarab = new ScarabModule(league);
    this.sextant = new SextantModule(league);
    //this.uniqueMaps = new UniqueMapsModule(league);
    this.weapon = new WeaponModule(league);
  }
}

export default WatchWievModule;
