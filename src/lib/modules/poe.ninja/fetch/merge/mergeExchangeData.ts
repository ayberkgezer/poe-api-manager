/**
 * Merges exchange endpoint lines with their join-table items, normalizing the
 * result to the documented ["id","name","icon"] contract.
 * @param lines The exchange lines to be merged.
 * @param items The exchange join-table items (top-level `items[]`, not `core.items`).
 * @param core The exchange `core` object; `core.primary` names the unit of `line.primaryValue`.
 * @returns The merged data.
 */
function mergeExchangeData(lines: any[], items: any[], core: any): any[] {
    const mergedData: any[] = [];

    lines.forEach((line) => {
        const item = items.find((candidate) => candidate.id === line.id);

        const mergedItem: any = { ...line };

        if (item) {
            mergedItem.name = item.name;
            mergedItem.icon = `https://web.poecdn.com${item.image}`;
            mergedItem.detailsId = item.detailsId;
            mergedItem.category = item.category;
        }

        if (core?.primary === "chaos") {
            mergedItem.chaosValue = line.primaryValue;
        } else {
            delete mergedItem.chaosValue;
        }

        mergedData.push(mergedItem);
    });

    return mergedData;
}

export default mergeExchangeData;
