/**
 * Generates a URL based on league and type. poe.ninja (currencyView) API is used.
 * @param league The league for which the URL is generated.
 * @param type The type of data for which the URL is generated.
 * @param typeName The name of the type of data for which the URL is generated.
 * @returns The generated URL.
 */
export default function urlGenerator(league: string, typeName: string, type: string): string {
    return `https://poe.ninja/api/data/${typeName}?league=${league}&type=${type}`;
}
