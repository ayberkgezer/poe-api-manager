import fetchData from "../fetch/fetchData";

/**
 * Retrieves quick currency data for a specific currency in a given league and type.
 * @param league - The league for which to fetch currency data.
 * @param typeName - The type of currency data to fetch.
 * @param type - The type of currency data to fetch.
 * @param currencyTypeName - The currencyTypeName of the currency to fetch data for.
 * @returns {Promise<{currencyTypeName: string, chaosEquivalent: number}>} An object containing the currency type name and its chaos equivalent.
 * @throws Throws an error if the currency data cannot be fetched or if the currency is not found.
 */
async function getQuickCurrency(league: string, typeName: string, type: string, currencyTypeName: string): Promise<{ currencyTypeName: string, chaosEquivalent: number }> {
    try {
        const fetchedData = await fetchData(league, typeName, type) as { currencyTypeName: string, chaosEquivalent: number }[];
        //find the currencyTypeName in the fetchedData
        for (const data of fetchedData) {
            if (data.currencyTypeName === currencyTypeName) {
                return {
                    currencyTypeName: data.currencyTypeName,
                    chaosEquivalent: data.chaosEquivalent,
                };
            }
        }
        throw new Error("Currency not found");
    } catch (error) {
        throw new Error(`Error fetching currency data: ${(error as Error).message}`);
    }
}

export default getQuickCurrency;