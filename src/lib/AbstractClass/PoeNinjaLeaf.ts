import PoeNinja from "./PoeNinja";

/**
 * A PoeNinja submodule with no behaviour beyond getData(). Used for every
 * itemView/currencyView type that doesn't need extra methods - currency's
 * getQuickCurrency is the one exception and keeps its own class.
 */
export default class PoeNinjaLeaf extends PoeNinja {}
