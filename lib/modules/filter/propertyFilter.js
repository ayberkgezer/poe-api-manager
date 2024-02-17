module.exports = function filterProperties(data, requestedProperties) {
  const result = [];

  data.forEach((item) => {
    const itemResult = {};
    requestedProperties.forEach((prop) => {
      if (item.hasOwnProperty(prop)) {
        itemResult[prop] = item[prop];
      } else {
        console.warn(`Property not found: ${prop}`);
      }
    });

    result.push(itemResult);
  });

  return result;
};
