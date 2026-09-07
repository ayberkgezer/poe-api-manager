import PoeWatch from "../../AbstractClass/PoeWatch";
import PoeWatchLeaf from "../../AbstractClass/PoeWatchLeaf";
import { AccessoryModule } from "./allModules/subModules/AccessoryModule";
import { ArmourModule } from "./allModules/subModules/ArmourModule";
import { BaseModule } from "./allModules/subModules/BaseModule";
import { GemModule } from "./allModules/subModules/GemModule";
import { WeaponModule } from "./allModules/subModules/WeaponModule";

/**
 * Maps each generic (no getCategory) view property to its poe.watch `type`
 * (category) value. accessory/armour/base/gem/weapon have getCategory and
 * keep their own classes below.
 */
const GENERIC_TYPES = {
  currency: "currency",
  beast: "beast",
  deliriumOrb: "deliriumOrb",
  divs: "card",
  essence: "essence",
  fossil: "fossil",
  fragment: "fragment",
  map: "map",
  flask: "flask",
  jewel: "jewel",
  invitation: "invitation",
  oil: "oil",
  scarab: "scarab",
  sextant: "sextans",
  uniqueMaps: "uniqueMap",
} as const;

/**
 * Represents a module for fetching data related to Watchstones and Watchstone Regions.
 */
export default class WatchViewModule {
  /** Module for fetching data related to Currency. */
  public currency!: PoeWatch;
  /** Module for fetching data related to Accessories. */
  public accessory: AccessoryModule;
  /** Module for fetching data related to Armour. */
  public armour: ArmourModule;
  /** Module for fetching data related to Base. */
  public base: BaseModule;
  /** Module for fetching data related to Beast. */
  public beast!: PoeWatch;
  /** Module for fetching data related to DeliriumOrb. */
  public deliriumOrb!: PoeWatch;
  /** Module for fetching data related to Divs. */
  public divs!: PoeWatch;
  /** Module for fetching data related to Essence. */
  public essence!: PoeWatch;
  /** Module for fetching data related to Fossil. */
  public fossil!: PoeWatch;
  /** Module for fetching data related to Fragment. */
  public fragment!: PoeWatch;
  /** Module for fetching data related to Map. */
  public map!: PoeWatch;
  /** Module for fetching data related to Flask. */
  public flask!: PoeWatch;
  /** Module for fetching data related to Jewel. */
  public jewel!: PoeWatch;
  /** Module for fetching data related to Gem. */
  public gem: GemModule;
  /** Module for fetching data related to Invitation. */
  public invitation!: PoeWatch;
  /** Module for fetching data related to Oil. */
  public oil!: PoeWatch;
  /** Module for fetching data related to Scarab. */
  public scarab!: PoeWatch;
  /** Module for fetching data related to Sextant. */
  public sextant!: PoeWatch;
  /** Module for fetching data related to UniqueMaps. */
  public uniqueMaps!: PoeWatch;
  /** Module for fetching data related to Weapon. */
  public weapon: WeaponModule;

  /**
   * Creates an instance of WatchWievModule.
   * @param league - The league name to fetch data from.
   */
  constructor(league: string) {
    (Object.keys(GENERIC_TYPES) as (keyof typeof GENERIC_TYPES)[]).forEach(
      (key) => {
        (this as any)[key] = new PoeWatchLeaf(league, GENERIC_TYPES[key]);
      },
    );
    this.accessory = new AccessoryModule(league);
    this.armour = new ArmourModule(league);
    this.base = new BaseModule(league);
    this.gem = new GemModule(league);
    this.weapon = new WeaponModule(league);
  }
}
