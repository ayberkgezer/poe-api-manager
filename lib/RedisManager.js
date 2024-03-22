const NinjaModule = require("./modules/redismanager/ninja/NinjaModule");
//const WatchModule = require("./modules/redismanager/watch/WatchModule");

class RedisManager {
  constructor() {
    this.ninja = new NinjaModule();
    //this.watch = new WatchModule();
  }
}

module.exports = RedisManager;
