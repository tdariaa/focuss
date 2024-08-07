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
  // console.log("category : ", category);

  const filteCategoriesrData = getFilterCategories(
    categoryProducts,
    Object.keys(CategoriesName)
  );
  // const categoryItems = getInitialValues(categoryProducts);
  const categoryItems = getInitialValues(
    Object.keys(CategoriesName) as CategoriesType
  );

  // console.log(
  //   // categoryProducts,
  //   // filteCategoriesrData,
  //   // Object.keys(CategoriesName)
  //   categoryItems
  // );

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("SUBMIT!!!", e.target);
  // };

  // const filterss = (data, values) => {
  //   return data.filter((item) => item.)
  // }

  // console.log(filterss);

  // const filterData = useMemo(
  //   () => filterProducts(productsData, checkboxValues),
  //   [checkboxValues, productsData]
  // );

  const formik = useFormik({
    initialValues: categoryItems,
    onSubmit: (values) => {
      console.log(values);
      // setCheckboxValues(values);
      setCheckboxValues(
        categoryProducts.filter((item: any) => {
          let isValid = true;

          for (let key in values) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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

  return (
    <>
      <div className="productsContainer">
        <button onClick={() => navigate(-1)}>Back</button>
        <button
          onClick={() => {
            setIsVisible((value) => !value);
            setCheckboxValues(categoryProducts);
            formik.resetForm();
          }}
        >
          click
        </button>
        {isVisible && (
          <form onSubmit={formik.handleSubmit}>
            <fieldset>
              {filteCategoriesrData.map((ctgr) => (
                <>
                  <p>{CategoriesName[ctgr.filterCategory]}</p>
                  {ctgr.data.map((item) => (
                    <label className="filterRadio">
                      <input
                        key={`${ctgr.filterCategory}${item}`}
                        id={item}
                        type="radio"
                        value={item}
                        // value={item}
                        name={ctgr.filterCategory}
                        // name={item}
                        className="filterRadio"
                        onChange={formik.handleChange}
                      />
                      {item}
                    </label>
                  ))}
                </>
              ))}
            </fieldset>
            <button type="submit">Submit!</button>
          </form>
        )}
        <ProductsCategory data={checkboxValues} />
      </div>
    </>
  );
};
