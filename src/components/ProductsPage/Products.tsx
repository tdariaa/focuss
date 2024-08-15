import { useNavigate, useParams } from "react-router-dom";
import {
  filterProducts,
  getFilterCategories,
  productsData,
  CategoriesName,
  GetFilterCategoriesType,
  getCategoryItems,
} from "src/utils";
import { useMemo, useRef, useState } from "react";
import { ProductItem } from "src/items/ProductItem/ProductItem";
import "./Products.css";

import { ProductsCategory } from "./ProductsCategory/ProductsCategory";
import { useFormik } from "formik";
import { CategoriesType, getInitialValues } from "./utils";

export const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { category = "" } = useParams();
  const navigate = useNavigate();
  const categoryProducts = useMemo(
    () => filterProducts(productsData, category),
    [category]
  );

  const [checkboxValues, setCheckboxValues] = useState<any>(categoryProducts);

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
      setCheckboxValues(
        categoryProducts.filter((item: any) => {
          let isValid = true;

          for (let key in values) {
            isValid =
              isValid &&
              (values[key as keyof typeof values]
                ? values[key as keyof typeof values] ===
                  item[key as keyof typeof item]
                : true);
          }
          return isValid ? item : "";
        })
      );
    },
  });
  console.log(formik);

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
            {filteCategoriesrData.map((ctgr) => (
              <div className="filterContainer">
                <p className="filterTitle">
                  {CategoriesName[ctgr.filterCategory]}
                </p>
                <fieldset className="filterWrapper">
                  {ctgr.data.map((item) => (
                    <label className="filterRadioLabel">
                      <input
                        key={`${ctgr.filterCategory}${item}`}
                        id={item}
                        type="radio"
                        value={item}
                        name={ctgr.filterCategory}
                        className="filterRadio"
                        onChange={formik.handleChange}
                      />
                      <div className="dot"></div>
                      {item}
                    </label>
                  ))}
                </fieldset>
              </div>
            ))}

            <button type="submit" className="submitButton">
              Искать
            </button>
          </form>
        )}
        <ProductsCategory data={checkboxValues} />
      </div>
    </>
  );
};
