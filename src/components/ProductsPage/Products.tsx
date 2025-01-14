import { useNavigate, useParams } from "react-router-dom";
import {
  filterProducts,
  getFilterCategories,
  productsData,
  CategoriesName,
  ProductsDataType,
  // GetFilterCategoriesType,
  // getCategoryItems,
} from "src/utils";
import { useMemo, useState } from "react";
// import { ProductItem } from "src/items/ProductItem/ProductItem";
import "./Products.css";

import { ProductsCategory } from "../ProductsCategory/ProductsCategory";
import { useFormik } from "formik";
import { CategoriesType, getInitialValues } from "./utils";

type FilterCriteria<T> = {
  [K in keyof T]?: T[K] | T[K][];
};

export const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(17843);
  const [currentPrice, setCurrentPrice] = useState(17843);
  const { category = "" } = useParams();
  const navigate = useNavigate();
  const categoryProducts = useMemo(
    () => filterProducts(productsData, category),
    [category]
  );

  const [checkboxValues, setCheckboxValues] =
    useState<ProductsDataType[]>(categoryProducts);

  const filteCategoriesrData = getFilterCategories(
    categoryProducts,
    Object.keys(CategoriesName)
  );

  const categoryItems = getInitialValues(
    Object.keys(CategoriesName) as CategoriesType
  );

  const formik = useFormik({
    initialValues: categoryItems,
    onSubmit: (values) => {
      console.log(values);
      function filterArray<T>(items: T[], criteria: FilterCriteria<T>): T[] {
        return items
          .filter((item: any) => parseInt(item.price) <= currentPrice)
          .filter((item) =>
            Object.entries(criteria).every(([key, value]) => {
              if (Array.isArray(value)) {
                return (
                  value.length === 0 || value.includes(item[key as keyof T])
                );
              }
              return (
                value === "" ||
                item[key as keyof T] === value ||
                key === "price"
              );
            })
          );
      }
      setCheckboxValues(
        filterArray(categoryProducts, values) as ProductsDataType[]
      );
    },
  });

  const handleChange = () => {};

  return (
    <>
      <div className="productsContainer">
        <div className="buttonContainer">
          <button onClick={() => navigate(-1)} className="submitButton">
            Назад
          </button>
          <button
            onClick={() => {
              setIsVisible((value) => !value);
              setCheckboxValues(categoryProducts);
              formik.resetForm();
            }}
            className="submitButton submitButton-last"
          >
            {isVisible ? "Закрыть" : "Фильтр"}
          </button>
        </div>
        {isVisible && (
          <form onSubmit={formik.handleSubmit} className="filterForm">
            {filteCategoriesrData.map((ctgr, i) => (
              <div className="filterContainer" key={i}>
                <p className="filterTitle">
                  {CategoriesName[ctgr.filterCategory]}
                </p>
                <fieldset className="filterWrapper">
                  {ctgr.data.map((item) =>
                    item && ctgr.filterCategory !== "price" ? (
                      <label className="filterRadioLabel" key={item}>
                        <input
                          key={`${ctgr.filterCategory}${item}`}
                          id={item}
                          type="checkbox"
                          value={item}
                          name={ctgr.filterCategory}
                          className="filterRadio"
                          onChange={formik.handleChange}
                        />
                        <div className="dot"></div>
                        {item}
                      </label>
                    ) : null
                  )}
                  {ctgr.filterCategory === "price" ? (
                    <>
                      <p>{minPrice}</p>
                      <input
                        className="filterRange"
                        name={ctgr.filterCategory}
                        onChange={(e) => {
                          formik.handleChange(e);
                          setCurrentPrice(e.target.value as unknown as number);
                        }}
                        type="range"
                        id="price"
                        min={minPrice}
                        max={maxPrice}
                        step="100"
                      />
                      <p>{currentPrice}</p>
                    </>
                  ) : null}
                </fieldset>
              </div>
            ))}

            <button type="submit" className="submitButton">
              Искать
            </button>
          </form>
        )}
        <ProductsCategory data={checkboxValues} />
        {/* <ProductsCategory data={categoryProducts} /> */}
      </div>
    </>
  );
};
