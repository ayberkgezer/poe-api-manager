const itemSubmodules = require("./itemSubmodules/itemSubModules");
const baseurl = require("../../../config/poeNinja/url");

//itemwiev module
class ItemWievModule {
  #league;
  #baseurl;
  constructor(league) {
    this.#league = league;
    this.#baseurl = baseurl.baseurl;
    const url = `${this.#baseurl}itemoverview?league=${this.#league}&type=`;

    this.baseType = new itemSubmodules.BaseTypeModule(url);
    this.beast = new itemSubmodules.BeastModule(url);
    this.deliriumOrbs = new itemSubmodules.DeliriumOrbsModule(url);
    this.divinationCard = new itemSubmodules.DivinationCardModule(url);
    this.essence = new itemSubmodules.EssenceModule(url);
    this.fossil = new itemSubmodules.FossilModule(url);
    this.helmetEnchant = new itemSubmodules.HelmetEnchantModule(url);
    this.incubator = new itemSubmodules.IncubatorModule(url);
    this.map = new itemSubmodules.MapModule(url);
    this.oil = new itemSubmodules.OilModule(url);
    this.resonator = new itemSubmodules.ResonatorModule(url);
    this.scarab = new itemSubmodules.ScarabModule(url);
    this.skillGem = new itemSubmodules.SkillGemModule(url);
    this.uniqueAccessory = new itemSubmodules.UniqueAccessoryModule(url);
    this.uniqueArmour = new itemSubmodules.UniqueArmourModule(url);
    this.uniqueFlask = new itemSubmodules.UniqueFlaskModule(url);
    this.uniqueJewel = new itemSubmodules.UniqueJewelModule(url);
    this.uniqueMap = new itemSubmodules.UniqueMapModule(url);
    this.uniqueWeapon = new itemSubmodules.UniqueWeaponModule(url);
    this.vials = new itemSubmodules.VialsModule(url);
    this.omen = new itemSubmodules.OmenModule(url);
    this.memory = new itemSubmodules.MemoryModule(url);
    this.invitation = new itemSubmodules.InvitationModule(url);
    this.uniqueRelics = new itemSubmodules.UniqueRelicsModule(url);
    this.clusterJewel = new itemSubmodules.ClusterJewelModule(url);
    this.blightedMap = new itemSubmodules.BlightedMapModule(url);
    this.blightRavagedMap = new itemSubmodules.BlightRavagedMapModule(url);
  }
}

//export ItemWievModule;
module.exports = ItemWievModule;
