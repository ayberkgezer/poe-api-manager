const itemSubmodules = require("./itemSubmodules/itemSubModules");
const baseurl = require("../../../config/poeNinja/url");

/**
 * Represents a module for viewing item-related information in a specific Path of Exile league.
 * @class
 */
class ItemWievModule {
  #league;
  #baseurl;

  /**
   * Creates a new instance of ItemWievModule.
   * @constructor
   * @param {string} league - The Path of Exile league for which the item information is retrieved.
   */
  constructor(league) {
    /**
     * The Path of Exile league for which the item information is retrieved.
     * @private
     * @type {string}
     */
    this.#league = league;

    /**
     * The base URL for the Path of Exile Ninja API.
     * @private
     * @type {string}
     */
    this.#baseurl = baseurl.baseurl;

    /**
     * The complete URL for retrieving item information for the specified league.
     * @private
     * @type {string}
     */
    const url = `${this.#baseurl}itemoverview?league=${this.#league}&type=`;

    /**
     * Represents a submodule for base type item information.
     */
    this.baseType = new itemSubmodules.BaseTypeModule(url);

    /**
     * Represents a submodule for beast item information.
     */
    this.beast = new itemSubmodules.BeastModule(url);

    /**
     * Represents a submodule for delirium orbs item information.
     */
    this.deliriumOrbs = new itemSubmodules.DeliriumOrbsModule(url);

    /**
     * Represents a submodule for divination card item information.
     */
    this.divinationCard = new itemSubmodules.DivinationCardModule(url);

    /**
     * Represents a submodule for essence item information.
     */
    this.essence = new itemSubmodules.EssenceModule(url);

    /**
     * Represents a submodule for fossil item information.
     */
    this.fossil = new itemSubmodules.FossilModule(url);

    /**
     * Represents a submodule for helmet enchant item information.
     */
    this.helmetEnchant = new itemSubmodules.HelmetEnchantModule(url);

    /**
     * Represents a submodule for incubator item information.
     */
    this.incubator = new itemSubmodules.IncubatorModule(url);

    /**
     * Represents a submodule for map item information.
     */
    this.map = new itemSubmodules.MapModule(url);

    /**
     * Represents a submodule for oil item information.
     */
    this.oil = new itemSubmodules.OilModule(url);

    /**
     * Represents a submodule for resonator item information.
     */
    this.resonator = new itemSubmodules.ResonatorModule(url);

    /**
     * Represents a submodule for scarab item information.
     */
    this.scarab = new itemSubmodules.ScarabModule(url);

    /**
     * Represents a submodule for skill gem item information.
     */
    this.skillGem = new itemSubmodules.SkillGemModule(url);

    /**
     * Represents a submodule for unique accessory item information.
     */
    this.uniqueAccessory = new itemSubmodules.UniqueAccessoryModule(url);

    /**
     * Represents a submodule for unique armour item information.
     */
    this.uniqueArmour = new itemSubmodules.UniqueArmourModule(url);

    /**
     * Represents a submodule for unique flask item information.
     */
    this.uniqueFlask = new itemSubmodules.UniqueFlaskModule(url);

    /**
     * Represents a submodule for unique jewel item information.
     */
    this.uniqueJewel = new itemSubmodules.UniqueJewelModule(url);

    /**
     * Represents a submodule for unique map item information.
     */
    this.uniqueMap = new itemSubmodules.UniqueMapModule(url);

    /**
     * Represents a submodule for unique weapon item information.
     */
    this.uniqueWeapon = new itemSubmodules.UniqueWeaponModule(url);

    /**
     * Represents a submodule for vials item information.
     */
    this.vials = new itemSubmodules.VialsModule(url);

    /**
     * Represents a submodule for omen item information.
     */
    this.omen = new itemSubmodules.OmenModule(url);

    /**
     * Represents a submodule for memory item information.
     */
    this.memory = new itemSubmodules.MemoryModule(url);

    /**
     * Represents a submodule for invitation item information.
     */
    this.invitation = new itemSubmodules.InvitationModule(url);

    /**
     * Represents a submodule for unique relics item information.
     */
    this.uniqueRelics = new itemSubmodules.UniqueRelicsModule(url);

    /**
     * Represents a submodule for cluster jewel item information.
     */
    this.clusterJewel = new itemSubmodules.ClusterJewelModule(url);

    /**
     * Represents a submodule for blighted map item information.
     */
    this.blightedMap = new itemSubmodules.BlightedMapModule(url);

    /**
     * Represents a submodule for blight ravaged map item information.
     */
    this.blightRavagedMap = new itemSubmodules.BlightRavagedMapModule(url);
  }
}

// Export the ItemWievModule class.
module.exports = ItemWievModule;
