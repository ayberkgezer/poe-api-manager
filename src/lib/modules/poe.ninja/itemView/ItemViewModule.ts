import * as Modules from "./itemSubmodules/itemSubModules";
/**
 * Represents a module for viewing item-related information in a specific Path of Exile league.
 */
export default class ItemViewModule {
  /**
   * Represents a submodule for base type item information.
   */
  public baseType: Modules.BaseTypeModule;

  /**
   * Represents a submodule for beast item information.
   */
  public beast: Modules.BeastModule;

  /**
   * Represents a submodule for delirium orbs item information.
   */
  public deliriumOrbs: Modules.DeliriumOrbsModule;

  /**
   * Represents a submodule for divination card item information.
   */
  public divinationCard: Modules.DivinationCardModule;

  /**
   * Represents a submodule for essence item information.
   */
  public essence: Modules.EssenceModule;

  /**
   * Represents a submodule for fossil item information.
   */
  public fossil: Modules.FossilModule;

  /**
   * Represents a submodule for helmet enchant item information.
   */
  public helmetEnchant: Modules.HelmetEnchantModule;

  /**
   * Represents a submodule for incubator item information.
   */
  public incubator: Modules.IncubatorModule;

  /**
   * Represents a submodule for map item information.
   */
  public map: Modules.MapModule;

  /**
   * Represents a submodule for oil item information.
   */
  public oil: Modules.OilModule;

  /**
   * Represents a submodule for resonator item information.
   */
  public resonator: Modules.ResonatorModule;

  /**
   * Represents a submodule for scarab item information.
   */
  public scarab: Modules.ScarabModule;

  /**
   * Represents a submodule for skill gem item information.
   */
  public skillGem: Modules.SkillGemModule;

  /**
   * Represents a submodule for unique accessory item information.
   */
  public uniqueAccessory: Modules.UniqueAccessoryModule;

  /**
   * Represents a submodule for unique armour item information.
   */
  public uniqueArmour: Modules.UniqueArmourModule;

  /**
   * Represents a submodule for unique flask item information.
   */
  public uniqueFlask: Modules.UniqueFlaskModule;

  /**
   * Represents a submodule for unique jewel item information.
   */
  public uniqueJewel: Modules.UniqueJewelModule;

  /**
   * Represents a submodule for unique map item information.
   */
  public uniqueMap: Modules.UniqueMapModule;

  /**
   * Represents a submodule for unique weapon item information.
   */
  public uniqueWeapon: Modules.UniqueWeaponModule;

  /**
   * Represents a submodule for vials item information.
   */
  public vials: Modules.VialsModule;

  /**
   * Represents a submodule for omen item information.
   */
  public omen: Modules.OmenModule;

  /**
   * Represents a submodule for memory item information.
   */
  public memory: Modules.MemoryModule;

  /**
   * Represents a submodule for invitation item information.
   */
  public invitation: Modules.InvitationModule;

  /**
   * Represents a submodule for unique relics item information.
   */
  public uniqueRelics: Modules.UniqueRelicModule;

  /**
   * Represents a submodule for cluster jewel item information.
   */
  public clusterJewel: Modules.ClusterJewelModule;

  /**
   * Represents a submodule for blighted map item information.
   */
  public blightedMap: Modules.BlightedMapModule;

  /**
   * Represents a submodule for blight ravaged map item information.
   */
  public blightRavagedMap: Modules.BlightedRavagedMapModule;

  /**
   * Represents a submodule for coffin item information.
   */
  public coffin: Modules.CoffinModule;

  /**
   * Creates an instance of AllflameEmberModule.
   */
  public allflameEmber: Modules.AllflameEmberModule;

  /**
   * Creates a new instance of ItemViewModule.
   * @param league - The Path of Exile league for which the item information is retrieved.
   * @param typeName - The type of item information to retrieve.
   */
  constructor(league: string, typeName: string) {
    this.baseType = new Modules.BaseTypeModule(league, typeName);
    this.beast = new Modules.BeastModule(league, typeName);
    this.deliriumOrbs = new Modules.DeliriumOrbsModule(league, typeName);
    this.divinationCard = new Modules.DivinationCardModule(league, typeName);
    this.essence = new Modules.EssenceModule(league, typeName);
    this.fossil = new Modules.FossilModule(league, typeName);
    this.helmetEnchant = new Modules.HelmetEnchantModule(league, typeName);
    this.incubator = new Modules.IncubatorModule(league, typeName);
    this.map = new Modules.MapModule(league, typeName);
    this.oil = new Modules.OilModule(league, typeName);
    this.resonator = new Modules.ResonatorModule(league, typeName);
    this.scarab = new Modules.ScarabModule(league, typeName);
    this.skillGem = new Modules.SkillGemModule(league, typeName);
    this.uniqueAccessory = new Modules.UniqueAccessoryModule(league, typeName);
    this.uniqueArmour = new Modules.UniqueArmourModule(league, typeName);
    this.uniqueFlask = new Modules.UniqueFlaskModule(league, typeName);
    this.uniqueJewel = new Modules.UniqueJewelModule(league, typeName);
    this.uniqueMap = new Modules.UniqueMapModule(league, typeName);
    this.uniqueWeapon = new Modules.UniqueWeaponModule(league, typeName);
    this.vials = new Modules.VialsModule(league, typeName);
    this.omen = new Modules.OmenModule(league, typeName);
    this.memory = new Modules.MemoryModule(league, typeName);
    this.invitation = new Modules.InvitationModule(league, typeName);
    this.uniqueRelics = new Modules.UniqueRelicModule(league, typeName);
    this.clusterJewel = new Modules.ClusterJewelModule(league, typeName);
    this.blightedMap = new Modules.BlightedMapModule(league, typeName);
    this.blightRavagedMap = new Modules.BlightedRavagedMapModule(
      league,
      typeName,
    );
    this.coffin = new Modules.CoffinModule(league, typeName);
    this.allflameEmber = new Modules.AllflameEmberModule(league, typeName);
  }
}
