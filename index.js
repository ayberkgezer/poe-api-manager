const NinjaAPI = require("./lib/NinjaAPI");
const WatchAPI = require("./lib/WatchAPI");
const Utils = require("./lib/Utils");
const RedisManager = require("./lib/RedisManager");

module.exports = {
  NinjaAPI: NinjaAPI,
  WatchAPI: WatchAPI,
  Utils: Utils,
  //RedisManager: RedisManager,
};
