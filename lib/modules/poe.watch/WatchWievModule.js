const allModules = require("./allModules/Modules");

class WatchWievModule {
  constructor(leagueUrl) {
    this.currency = new allModules.CurrencyModule(leagueUrl);
    //this.deliriumOrb = new allModules.DeliriumOrbModule(leagueUrl);
    //this.divinationCard = new allModules.DivsModule(leagueUrl);
    this.essence = new allModules.EssenceModule(leagueUrl);
    this.fossil = new allModules.FossilModule(leagueUrl);
    this.fragment = new allModules.FragmentModule(leagueUrl);
    this.gem = new allModules.GemModule(leagueUrl);
    //this.inscribed = new allModules.InscribedModule(leagueUrl);
    this.invitation = new allModules.InvitationModule(leagueUrl);
    this.jewel = new allModules.JewelModule(leagueUrl);
    this.map = new allModules.MapModule(leagueUrl);
    this.oil = new allModules.OilModule(leagueUrl);
    this.scarab = new allModules.ScarabModule(leagueUrl);
    this.sextant = new allModules.SextantModule(leagueUrl);
    //this.uniqueMap = new allModules.UniqueMapsModule(leagueUrl);
    this.accessory = new allModules.AccessoryModule(leagueUrl);
    this.armour = new allModules.ArmourModule(leagueUrl);
    this.weapon = new allModules.WeaponModule(leagueUrl);
    this.flask = new allModules.FlaskModule(leagueUrl);
    this.base = new allModules.BaseModule(leagueUrl);
    this.beast = new allModules.BeastModule(leagueUrl);
  }
}
module.exports = WatchWievModule;
