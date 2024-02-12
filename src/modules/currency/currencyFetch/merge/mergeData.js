function mergeData(lines, currencyDetails) {
  const mergedData = [];

  lines.forEach((line) => {
    const currencyType = line.currencyTypeName;

    // Find the corresponding currencyDetail based on currencyType
    const currencyDetail = currencyDetails.find(
      (detail) => detail.name === currencyType
    );

    if (currencyDetail) {
      // Merge line and currencyDetail into a new object
      const mergedItem = {
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

module.exports = mergeData;
