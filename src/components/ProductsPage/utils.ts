import { CategoriesName } from "src/utils";

export type CategoriesType = Array<keyof typeof CategoriesName>;

export const getInitialValues = (
  categories: CategoriesType
): Record<keyof typeof CategoriesName, string> => {
  let sorted = new Map();
  for (let i = 0; i < categories.length; i++) {
    sorted.set(categories[i], "");
  }
  return Object.fromEntries(sorted);
};
