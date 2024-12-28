/**
 * Filters properties of objects in an array based on the specified properties.
 * @param data The array of objects to filter.
 * @param requestedProperties The array of property names to include in the result.
 * @returns An array of objects with only the specified properties.
 */
export default function filterProperties(data: Record<string, any>[], requestedProperties: string[]): object[] {
    const result: object[] = [];
  
    data.forEach((item) => {
      const itemResult: Record<string, any> = {};
  
      requestedProperties.forEach((prop) => {
        if (Object.prototype.hasOwnProperty.call(item, prop)) {
          itemResult[prop] = item[prop];
        } else {
          console.warn(`Property not found: ${prop}`);
        }
      });
  
      result.push(itemResult);
    });
  
    return result;
  }