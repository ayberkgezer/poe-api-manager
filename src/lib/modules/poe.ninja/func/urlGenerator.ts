import ValidationError from "../../../errors/ValidationError";

/**
 * Maps the internal typeName to its poe.ninja economy API path.
 */
const PATHS: Record<string, string> = {
  currencyoverview: "/poe1/api/economy/stash/current/currency/overview",
  itemoverview: "/poe1/api/economy/stash/current/item/overview",
  exchangeoverview: "/poe1/api/economy/exchange/current/overview",
};

/**
 * Generates a URL based on league and type. poe.ninja (currencyView) API is used.
 * @param league The league for which the URL is generated.
 * @param type The type of data for which the URL is generated.
 * @param typeName The name of the type of data for which the URL is generated.
 * @returns The generated URL.
 */
export default function urlGenerator(league: string, typeName: string, type: string): string {
    const path = PATHS[typeName];
    if (!path) {
        throw new ValidationError(`Invalid typeName: ${typeName}`, 400, { league, typeName, type });
    }
    return `https://poe.ninja${path}?league=${encodeURIComponent(league)}&type=${encodeURIComponent(type)}`;
}
