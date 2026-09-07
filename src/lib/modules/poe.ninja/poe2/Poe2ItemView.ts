import PoeNinja2 from "./PoeNinja2";

/**
 * The 9 poe.ninja PoE2 stash item types, verified live. Empty on "Standard" -
 * PoE2 economy data only exists on active leagues.
 */
const ITEM_TYPES = {
  uniqueWeapons: "UniqueWeapons",
  uniqueArmours: "UniqueArmours",
  uniqueAccessories: "UniqueAccessories",
  uniqueFlasks: "UniqueFlasks",
  uniqueCharms: "UniqueCharms",
  uniqueJewels: "UniqueJewels",
  uniqueSanctumRelics: "UniqueSanctumRelics",
  uniqueTablets: "UniqueTablets",
  precursorTablets: "PrecursorTablets",
} as const;

/**
 * Represents the poe.ninja PoE2 stash item types for a league.
 */
export default class Poe2ItemView {
  public uniqueWeapons!: PoeNinja2;
  public uniqueArmours!: PoeNinja2;
  public uniqueAccessories!: PoeNinja2;
  public uniqueFlasks!: PoeNinja2;
  public uniqueCharms!: PoeNinja2;
  public uniqueJewels!: PoeNinja2;
  public uniqueSanctumRelics!: PoeNinja2;
  public uniqueTablets!: PoeNinja2;
  public precursorTablets!: PoeNinja2;

  /**
   * Creates a new Poe2ItemView instance.
   * @param league The Path of Exile 2 league.
   */
  constructor(league: string) {
    (Object.keys(ITEM_TYPES) as (keyof typeof ITEM_TYPES)[]).forEach(
      (key) => {
        (this as any)[key] = new PoeNinja2(league, ITEM_TYPES[key], "item");
      },
    );
  }
}
