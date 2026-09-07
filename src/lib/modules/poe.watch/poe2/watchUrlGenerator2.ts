/**
 * Generates the poe.watch PoE2 exchange ratios URL. This is the only PoE2
 * endpoint poe.watch exposes (per their published OpenAPI spec); /get and
 * /leagues are PoE1-only and have no `game` parameter.
 * @param {string} league - The league for which the URL is generated.
 * @returns {string} - The generated URL.
 */
export default function watchUrlGenerator2(league: string): string {
  return `https://api.poe.watch/exchange/ratios?league=${encodeURIComponent(league)}&game=poe2`;
}
