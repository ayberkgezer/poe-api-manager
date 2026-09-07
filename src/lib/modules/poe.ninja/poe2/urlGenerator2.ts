/**
 * Maps the poe.ninja PoE2 economy endpoint to its API path.
 */
const PATHS: Record<"exchange" | "item", string> = {
  exchange: "/poe2/api/economy/exchange/current/overview",
  item: "/poe2/api/economy/stash/current/item/overview",
};

/**
 * Generates a poe.ninja PoE2 URL. Unlike PoE1, there is no currency stash
 * endpoint - currency is served by the exchange endpoint.
 * @param league The league for which the URL is generated.
 * @param type The poe.ninja PoE2 type (e.g. "Currency", "UniqueWeapons").
 * @param endpoint Which PoE2 economy endpoint to hit.
 * @returns The generated URL.
 */
export default function urlGenerator2(
  league: string,
  type: string,
  endpoint: "exchange" | "item",
): string {
  return `https://poe.ninja${PATHS[endpoint]}?league=${encodeURIComponent(league)}&type=${encodeURIComponent(type)}`;
}
