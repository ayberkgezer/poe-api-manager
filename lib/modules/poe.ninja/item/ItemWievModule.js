const itemSubmodules = require("./itemSubmodules/itemSubModules");

/**
 * Represents a module for viewing item-related information in a specific Path of Exile league.
 * @class
 */
class ItemWievModule {
  /**
   * Creates a new instance of ItemWievModule.
   * @constructor
   * @param {string} league - The Path of Exile league for which the item information is retrieved.
   */
  constructor(league) {
    /**
     * Represents a submodule for base type item information.
     */
    this.baseType = new itemSubmodules.BaseTypeModule(league);

    /**
     * Represents a submodule for beast item information.
     */
    this.beast = new itemSubmodules.BeastModule(league);

    /**
     * Represents a submodule for delirium orbs item information.
     */
    this.deliriumOrbs = new itemSubmodules.DeliriumOrbsModule(league);

    /**
     * Represents a submodule for divination card item information.
     */
    this.divinationCard = new itemSubmodules.DivinationCardModule(league);

    /**
     * Represents a submodule for essence item information.
     */
    this.essence = new itemSubmodules.EssenceModule(league);

    /**
     * Represents a submodule for fossil item information.
     */
    this.fossil = new itemSubmodules.FossilModule(league);

    /**
     * Represents a submodule for helmet enchant item information.
     */
    this.helmetEnchant = new itemSubmodules.HelmetEnchantModule(league);

    /**
     * Represents a submodule for incubator item information.
     */
    this.incubator = new itemSubmodules.IncubatorModule(league);

    /**
     * Represents a submodule for map item information.
     */
    this.map = new itemSubmodules.MapModule(league);

    /**
     * Represents a submodule for oil item information.
     */
    this.oil = new itemSubmodules.OilModule(league);

    /**
     * Represents a submodule for resonator item information.
     */
    this.resonator = new itemSubmodules.ResonatorModule(league);

    /**
     * Represents a submodule for scarab item information.
     */
    this.scarab = new itemSubmodules.ScarabModule(league);

    /**
     * Represents a submodule for skill gem item information.
     */
    this.skillGem = new itemSubmodules.SkillGemModule(league);

    /**
     * Represents a submodule for unique accessory item information.
     */
    this.uniqueAccessory = new itemSubmodules.UniqueAccessoryModule(league);

    /**
     * Represents a submodule for unique armour item information.
     */
    this.uniqueArmour = new itemSubmodules.UniqueArmourModule(league);

    /**
     * Represents a submodule for unique flask item information.
     */
    this.uniqueFlask = new itemSubmodules.UniqueFlaskModule(league);

    /**
     * Represents a submodule for unique jewel item information.
     */
    this.uniqueJewel = new itemSubmodules.UniqueJewelModule(league);

    /**
     * Represents a submodule for unique map item information.
     */
    this.uniqueMap = new itemSubmodules.UniqueMapModule(league);

    /**
     * Represents a submodule for unique weapon item information.
     */
    this.uniqueWeapon = new itemSubmodules.UniqueWeaponModule(league);

    /**
     * Represents a submodule for vials item information.
     */
    this.vials = new itemSubmodules.VialsModule(league);

    /**
     * Represents a submodule for omen item information.
     */
    this.omen = new itemSubmodules.OmenModule(league);

    /**
     * Represents a submodule for memory item information.
     */
    this.memory = new itemSubmodules.MemoryModule(league);

    /**
     * Represents a submodule for invitation item information.
     */
    this.invitation = new itemSubmodules.InvitationModule(league);

    /**
     * Represents a submodule for unique relics item information.
     */
    this.uniqueRelics = new itemSubmodules.UniqueRelicsModule(league);

    /**
     * Represents a submodule for cluster jewel item information.
     */
    this.clusterJewel = new itemSubmodules.ClusterJewelModule(league);

    /**
     * Represents a submodule for blighted map item information.
     */
    this.blightedMap = new itemSubmodules.BlightedMapModule(league);

    /**
     * Represents a submodule for blight ravaged map item information.
     */
    this.blightRavagedMap = new itemSubmodules.BlightRavagedMapModule(league);

    /**
     * Represents a submodule for coffin item information.
     */
    this.coffin = new itemSubmodules.CoffinModule(league);

    /**
     * Represents a submodule for allflame ember item information.
     */
    this.allflameEmber = new itemSubmodules.AllflameEmberModule(league);
  }
}

// Export the ItemWievModule class.
module.exports = ItemWievModule;
