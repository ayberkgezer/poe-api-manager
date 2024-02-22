const itemSubmodules = require("./itemSubmodules/itemSubModules");
const baseurl = require("../../../config/poeNinja/url");

/**
 * Represents a module for viewing item-related information in a specific Path of Exile league.
 * @class
 */
class ItemWievModule {
  #league; // eslint-disable-line
  #baseurl; // eslint-disable-line
  /**
   * Creates a new instance of ItemWievModule.
   * @constructor
   * @param {string} league - The Path of Exile league for which the item information is retrieved.
   */
  constructor(league) {
    /**
     * @type {string} #league - The Path of Exile league for which the item information is retrieved.
     * @private
     */
    this.#league = league;

    /**
     * @type {string} #baseurl - The base URL for the Path of Exile Ninja API.
     * @private
     */
    this.#baseurl = baseurl.baseurl;

    /**
     * @type {string} url - The complete URL for retrieving item information for the specified league.
     * @private
     */
    const url = `${this.#baseurl}itemoverview?league=${this.#league}&type=`;

    /**
     * @type {BaseTypeModule} baseType - The submodule for base type item information.
     */
    this.baseType = new itemSubmodules.BaseTypeModule(url);

    /**
     * @type {BeastModule} beast - The submodule for beast item information.
     */
    this.beast = new itemSubmodules.BeastModule(url);

    /**
     * @type {DeliriumOrbsModule} deliriumOrbs - The submodule for delirium orbs item information.
     */
    this.deliriumOrbs = new itemSubmodules.DeliriumOrbsModule(url);

    /**
     * @type {DivinationCardModule} divinationCard - The submodule for divination card item information.
     */
    this.divinationCard = new itemSubmodules.DivinationCardModule(url);

    /**
     * @type {EssenceModule} essence - The submodule for essence item information.
     */
    this.essence = new itemSubmodules.EssenceModule(url);

    /**
     * @type {FossilModule} fossil - The submodule for fossil item information.
     */
    this.fossil = new itemSubmodules.FossilModule(url);

    /**
     * @type {HelmetEnchantModule} helmetEnchant - The submodule for helmet enchant item information.
     */
    this.helmetEnchant = new itemSubmodules.HelmetEnchantModule(url);

    /**
     * @type {IncubatorModule} incubator - The submodule for incubator item information.
     */
    this.incubator = new itemSubmodules.IncubatorModule(url);

    /**
     * @type {MapModule} map - The submodule for map item information.
     */
    this.map = new itemSubmodules.MapModule(url);

    /**
     * @type {OilModule} oil - The submodule for oil item information.
     */
    this.oil = new itemSubmodules.OilModule(url);

    /**
     * @type {ResonatorModule} resonator - The submodule for resonator item information.
     */
    this.resonator = new itemSubmodules.ResonatorModule(url);

    /**
     * @type {ScarabModule} scarab - The submodule for scarab item information.
     */
    this.scarab = new itemSubmodules.ScarabModule(url);

    /**
     * @type {SkillGemModule} skillGem - The submodule for skill gem item information.
     */
    this.skillGem = new itemSubmodules.SkillGemModule(url);

    /**
     * @type {UniqueAccessoryModule} uniqueAccessory - The submodule for unique accessory item information.
     */
    this.uniqueAccessory = new itemSubmodules.UniqueAccessoryModule(url);

    /**
     * @type {UniqueArmourModule} uniqueArmour - The submodule for unique armour item information.
     */
    this.uniqueArmour = new itemSubmodules.UniqueArmourModule(url);

    /**
     * @type {UniqueFlaskModule} uniqueFlask - The submodule for unique flask item information.
     */
    this.uniqueFlask = new itemSubmodules.UniqueFlaskModule(url);

    /**
     * @type {UniqueJewelModule} uniqueJewel - The submodule for unique jewel item information.
     */
    this.uniqueJewel = new itemSubmodules.UniqueJewelModule(url);

    /**
     * @type {UniqueMapModule} uniqueMap - The submodule for unique map item information.
     */
    this.uniqueMap = new itemSubmodules.UniqueMapModule(url);

    /**
     * @type {UniqueWeaponModule} uniqueWeapon - The submodule for unique weapon item information.
     */
    this.uniqueWeapon = new itemSubmodules.UniqueWeaponModule(url);

    /**
     * @type {VialsModule} vials - The submodule for vials item information.
     */
    this.vials = new itemSubmodules.VialsModule(url);

    /**
     * @type {OmenModule} omen - The submodule for omen item information.
     */
    this.omen = new itemSubmodules.OmenModule(url);

    /**
     * @type {MemoryModule} memory - The submodule for memory item information.
     */
    this.memory = new itemSubmodules.MemoryModule(url);

    /**
     * @type {InvitationModule} invitation - The submodule for invitation item information.
     */
    this.invitation = new itemSubmodules.InvitationModule(url);

    /**
     * @type {UniqueRelicsModule} uniqueRelics - The submodule for unique relics item information.
     */
    this.uniqueRelics = new itemSubmodules.UniqueRelicsModule(url);

    /**
     * @type {ClusterJewelModule} clusterJewel - The submodule for cluster jewel item information.
     */
    this.clusterJewel = new itemSubmodules.ClusterJewelModule(url);

    /**
     * @type {BlightedMapModule} blightedMap - The submodule for blighted map item information.
     */
    this.blightedMap = new itemSubmodules.BlightedMapModule(url);

    /**
     * @type {BlightRavagedMapModule} blightRavagedMap - The submodule for blight ravaged map item information.
     */
    this.blightRavagedMap = new itemSubmodules.BlightRavagedMapModule(url);
  }
}

// Export the ItemWievModule class.
module.exports = ItemWievModule;
