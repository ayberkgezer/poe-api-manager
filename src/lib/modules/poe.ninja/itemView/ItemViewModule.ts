import PoeNinja from "../../../AbstractClass/PoeNinja";
import PoeNinjaLeaf from "../../../AbstractClass/PoeNinjaLeaf";

/**
 * Maps each itemView property to its poe.ninja `type` value and the endpoint
 * (typeName) it's served from. Each of these used to be its own 10-line
 * class whose only content was these two strings.
 */
const ITEM_TYPES = {
  baseType: { type: "BaseType", endpoint: "itemoverview" },
  beast: { type: "Beast", endpoint: "itemoverview" },
  deliriumOrbs: { type: "DeliriumOrb", endpoint: "exchangeoverview" },
  divinationCard: { type: "DivinationCard", endpoint: "exchangeoverview" },
  essence: { type: "Essence", endpoint: "exchangeoverview" },
  fossil: { type: "Fossil", endpoint: "exchangeoverview" },
  incubator: { type: "Incubator", endpoint: "itemoverview" },
  map: { type: "Map", endpoint: "itemoverview" },
  oil: { type: "Oil", endpoint: "exchangeoverview" },
  resonator: { type: "Resonator", endpoint: "exchangeoverview" },
  scarab: { type: "Scarab", endpoint: "exchangeoverview" },
  skillGem: { type: "SkillGem", endpoint: "itemoverview" },
  uniqueAccessory: { type: "UniqueAccessory", endpoint: "itemoverview" },
  uniqueArmour: { type: "UniqueArmour", endpoint: "itemoverview" },
  uniqueFlask: { type: "UniqueFlask", endpoint: "itemoverview" },
  uniqueJewel: { type: "UniqueJewel", endpoint: "itemoverview" },
  uniqueMap: { type: "UniqueMap", endpoint: "itemoverview" },
  uniqueWeapon: { type: "UniqueWeapon", endpoint: "itemoverview" },
  vials: { type: "Vial", endpoint: "itemoverview" },
  omen: { type: "Omen", endpoint: "exchangeoverview" },
  memory: { type: "Memory", endpoint: "itemoverview" },
  invitation: { type: "Invitation", endpoint: "itemoverview" },
  uniqueRelics: { type: "UniqueRelic", endpoint: "itemoverview" },
  clusterJewel: { type: "ClusterJewel", endpoint: "itemoverview" },
  blightedMap: { type: "BlightedMap", endpoint: "itemoverview" },
  blightRavagedMap: { type: "BlightedRavagedMap", endpoint: "itemoverview" },
  coffin: { type: "Coffin", endpoint: "itemoverview" },
  allflameEmber: { type: "AllflameEmber", endpoint: "exchangeoverview" },
} as const;

/**
 * Represents a module for viewing item-related information in a specific Path of Exile league.
 */
export default class ItemViewModule {
  /** Represents a submodule for base type item information. */
  public baseType!: PoeNinja;
  /** Represents a submodule for beast item information. */
  public beast!: PoeNinja;
  /** Represents a submodule for delirium orbs item information. *(exchange)* */
  public deliriumOrbs!: PoeNinja;
  /** Represents a submodule for divination card item information. *(exchange)* */
  public divinationCard!: PoeNinja;
  /** Represents a submodule for essence item information. *(exchange)* */
  public essence!: PoeNinja;
  /** Represents a submodule for fossil item information. *(exchange)* */
  public fossil!: PoeNinja;
  /** Represents a submodule for incubator item information. */
  public incubator!: PoeNinja;
  /** Represents a submodule for map item information. */
  public map!: PoeNinja;
  /** Represents a submodule for oil item information. *(exchange)* */
  public oil!: PoeNinja;
  /** Represents a submodule for resonator item information. *(exchange)* */
  public resonator!: PoeNinja;
  /** Represents a submodule for scarab item information. *(exchange)* */
  public scarab!: PoeNinja;
  /** Represents a submodule for skill gem item information. */
  public skillGem!: PoeNinja;
  /** Represents a submodule for unique accessory item information. */
  public uniqueAccessory!: PoeNinja;
  /** Represents a submodule for unique armour item information. */
  public uniqueArmour!: PoeNinja;
  /** Represents a submodule for unique flask item information. */
  public uniqueFlask!: PoeNinja;
  /** Represents a submodule for unique jewel item information. */
  public uniqueJewel!: PoeNinja;
  /** Represents a submodule for unique map item information. */
  public uniqueMap!: PoeNinja;
  /** Represents a submodule for unique weapon item information. */
  public uniqueWeapon!: PoeNinja;
  /** Represents a submodule for vials item information. */
  public vials!: PoeNinja;
  /** Represents a submodule for omen item information. *(exchange)* */
  public omen!: PoeNinja;
  /** Represents a submodule for memory item information. */
  public memory!: PoeNinja;
  /** Represents a submodule for invitation item information. */
  public invitation!: PoeNinja;
  /** Represents a submodule for unique relics item information. */
  public uniqueRelics!: PoeNinja;
  /** Represents a submodule for cluster jewel item information. */
  public clusterJewel!: PoeNinja;
  /** Represents a submodule for blighted map item information. */
  public blightedMap!: PoeNinja;
  /** Represents a submodule for blight ravaged map item information. */
  public blightRavagedMap!: PoeNinja;
  /** Represents a submodule for coffin item information. */
  public coffin!: PoeNinja;
  /** Represents a submodule for allflame ember item information. *(exchange)* */
  public allflameEmber!: PoeNinja;

  /**
   * Creates a new instance of ItemViewModule.
   * @param league - The Path of Exile league for which the item information is retrieved.
   */
  constructor(league: string) {
    (Object.keys(ITEM_TYPES) as (keyof typeof ITEM_TYPES)[]).forEach(
      (key) => {
        const entry = ITEM_TYPES[key];
        (this as any)[key] = new PoeNinjaLeaf(league, entry.endpoint, entry.type);
      },
    );
  }
}
