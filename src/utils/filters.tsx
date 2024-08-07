import { CategoriesName } from "src/utils";

export const filterProducts = (list: any, id?: string) => {
  if (id) return list.filter((item: any) => item.categories === id);
  else return [];
};

export type GetFilterCategoriesType = {
  filterCategory: keyof typeof CategoriesName;
  data: any[];
};

export const getFilterCategories = (
  products: any[] | undefined,
  categories: Array<string>
): GetFilterCategoriesType[] => {
  const result = [];

  for (const key of categories) {
    result.push({
      filterCategory: key as keyof typeof CategoriesName,
      data: products ? Array.from(new Set(products.map((p) => p[key]))) : [],
    });
  }

  return result;
};

export const getCategoryItems = (
  products: any[] | undefined,
  categories: Array<string>
) => {
  // let result;
  let sorted = [];
  let result = new Map();
  let d;

  for (let key of categories) {
    if (products) sorted.push(...products.map((p) => p[key]));
  }

  for (let i = 0; i < sorted.length; i++) {
    result.set(sorted[i], "");
  }
  d = Object.fromEntries(result);

  return d;
};
