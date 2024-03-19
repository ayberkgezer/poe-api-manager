/**
 * Generates a URL based on league and type. poe.watch API is used.
 * @param {string} league - The league for which the URL is generated.
 * @param {string} type - The type of data for which the URL is generated.
 * @returns {string} - The generated URL.
 */
module.exports = function urlGenerator(league, type) {
  return `https://api.poe.watch/get?category=${type}&league=${league}`;
};
