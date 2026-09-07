import PoeNinja2 from "./PoeNinja2";

/**
 * The 14 poe.ninja PoE2 exchange types, verified live.
 */
const EXCHANGE_TYPES = {
  currency: "Currency",
  fragments: "Fragments",
  abyss: "Abyss",
  uncutGems: "UncutGems",
  lineageSupportGems: "LineageSupportGems",
  essences: "Essences",
  soulCores: "SoulCores",
  idols: "Idols",
  runes: "Runes",
  ritual: "Ritual",
  expedition: "Expedition",
  delirium: "Delirium",
  breach: "Breach",
  verisium: "Verisium",
} as const;

/**
 * Represents the poe.ninja PoE2 exchange types for a league. PoE2 currency
 * lives here too - there is no PoE2 stash currency endpoint.
 */
export default class Poe2ExchangeView {
  public currency!: PoeNinja2;
  public fragments!: PoeNinja2;
  public abyss!: PoeNinja2;
  public uncutGems!: PoeNinja2;
  public lineageSupportGems!: PoeNinja2;
  public essences!: PoeNinja2;
  public soulCores!: PoeNinja2;
  public idols!: PoeNinja2;
  public runes!: PoeNinja2;
  public ritual!: PoeNinja2;
  public expedition!: PoeNinja2;
  public delirium!: PoeNinja2;
  public breach!: PoeNinja2;
  public verisium!: PoeNinja2;

  /**
   * Creates a new Poe2ExchangeView instance.
   * @param league The Path of Exile 2 league.
   */
  constructor(league: string) {
    (Object.keys(EXCHANGE_TYPES) as (keyof typeof EXCHANGE_TYPES)[]).forEach(
      (key) => {
        (this as any)[key] = new PoeNinja2(
          league,
          EXCHANGE_TYPES[key],
          "exchange",
        );
      },
    );
  }
}
