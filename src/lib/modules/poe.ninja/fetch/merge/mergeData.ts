/**
 * Merges the provided lines with the corresponding currency details.
 * @param lines The lines to be merged.
 * @param currencyDetails The currency details to be merged with the lines.
 * @returns The merged data.
 */
function mergeData(lines: any[], currencyDetails: any[]): any[] {
    const mergedData: any[] = [];

    lines.forEach((line) => {
        const currencyType: string = line.currencyTypeName;

        // Find the corresponding currencyDetail based on currencyType
        const currencyDetail = currencyDetails.find(
            (detail) => detail.name === currencyType
        );

        if (currencyDetail) {
            // Merge line and currencyDetail into a new object
            const mergedItem: any = {
                ...line,
                id: currencyDetail.id,
                icon: currencyDetail.icon,
                name: currencyDetail.name,
            };

            // Add the merged item to the result array
            mergedData.push(mergedItem);
        }
    });

    return mergedData;
}

export default mergeData;
