import { SyntheticEvent, useState } from "react";
import "./ProductItem.css";
import { ProductModal } from "src/components/ProductModal";
import {
  allCategoriesArray,
  AllCatigoriesName,
  CategoriesName,
  getEnumKeys,
  ProductsDataType,
} from "src/utils";

type ProductItemType = {
  item: ProductsDataType;
};

export const ProductItem = ({ item }: ProductItemType) => {
  const [isVisible, setIsVisible] = useState(false);
  const visibleChangeHandler = (e: SyntheticEvent) => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <div className="productItemContainer">
        <p className="productItemTitle">{item.title}</p>
        <div className="productItemInfo">
          <div className="productItemImgContainer">
            {item.mainImage ? (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                className="productItemImg"
                src={require(`src/images/products/${item.mainImage}`)}
              />
            ) : null}
          </div>
          <ul className="productItemСharacteristics">
            {getEnumKeys(CategoriesName).map((property) => {
              return (
                <li className="productItemPoint">
                  <p className="productItemSubtitle">
                    {AllCatigoriesName[property]}:
                  </p>
                  <p className="productItemDescription">{item[property]}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="productItemMore" onClick={visibleChangeHandler}>
          Подробнее
        </button>
      </div>
      {isVisible && (
        <ProductModal item={item} visibleHandler={visibleChangeHandler} />
      )}
    </>
  );
};
