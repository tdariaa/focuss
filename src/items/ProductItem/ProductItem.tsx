import { SyntheticEvent, useState } from "react";
import "./ProductItem.css";
import { ProductModal } from "src/items/ProductModal";
import { AllCatigoriesName } from "src/utils";

export const ProductItem = ({ item }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const visibleChangeHandler = (e: SyntheticEvent) => {
    console.log(e.target);
    // if (e.target)
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <div className="productItemContainer">
        <p className="productItemTitle">{item.title}</p>
        <div className="productItemInfo">
          <div className="productItemImg"></div>
          <ul className="productItemСharacteristics">
            <li className="productItemPoint">
              <p className="productItemSubtitle">
                {AllCatigoriesName["resolution"]}:
              </p>
              {item.resolution}
            </li>
            <li className="productItemPoint">
              <p className="productItemSubtitle">
                {AllCatigoriesName["focalLength"]}:{" "}
              </p>
              {item.focalLength}
            </li>
            <li className="productItemPoint">
              <p className="productItemSubtitle">
                {AllCatigoriesName["microphone"]}:{" "}
              </p>
              {item.microphone}
            </li>
            <li className="productItemPoint">
              <p className="productItemSubtitle">
                {AllCatigoriesName["dynamic"]}:{" "}
              </p>
              {item.dynamic}
            </li>
            <li className="productItemPoint">
              <p className="productItemSubtitle">
                {AllCatigoriesName["memoryСard"]}:{" "}
              </p>
              {item.memoryСard}
            </li>
            <li className="productItemPoint">
              <p className="productItemSubtitle">
                {AllCatigoriesName["wifi"]}:{" "}
              </p>
              {item.wifi}
            </li>
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
