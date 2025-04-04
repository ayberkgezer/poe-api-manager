import ValidationError from "../errors/ValidationError.js";

/**
 * Filters properties of objects in an array based on the specified properties.
 * @param {Record<string, any> []} data The array of objects to filter.
 * @param {string} requestedProperties The array of property names to include in the result.
 * @returns {object[]} An array of objects with only the specified properties.
 */
export default function filterProperties(
  data: Record<string, any>[],
  requestedProperties: string[],
): object[] {
  // Validate input first
  if (!Array.isArray(data)) {
    throw new ValidationError("Input data must be an array", 400, {
      providedType: typeof data,
    });
  }

  if (!Array.isArray(requestedProperties)) {
    throw new ValidationError("requestedProperties must be an array", 400, {
      providedType: typeof requestedProperties,
    });
  }
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
