import PoeWatch from "./PoeWatch";

/**
 * A PoeWatch submodule with no behaviour beyond getData(). Used for every
 * view type that doesn't need getCategory - accessory/armour/base/gem/weapon
 * keep their own classes for that.
 */
export default class PoeWatchLeaf extends PoeWatch {}
