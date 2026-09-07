/**
 * Filters PoE2 exchange ratio items by their `category` field. Note this is
 * `category`, not `group` - the field the PoE1 getCategory filters on -
 * because the PoE2 ratios response uses a different field name.
 * @param items The items to filter.
 * @param categoryName The category value to match.
 * @returns The matching items.
 */
export default function filterByCategory(
  items: any[],
  categoryName: string,
): any[] {
  return items.filter((item) => item.category === categoryName);
}
