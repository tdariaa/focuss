import { ProductItem } from "src/components/ProductItem/ProductItem";
import "./ProductsCategory.css";
import { ProductsDataType } from "src/utils";

type ProductsCategoryType = {
  data: ProductsDataType[];
};

export const ProductsCategory = ({ data }: ProductsCategoryType) => {
  console.log(data);
  return (
    <>
      <ul className="productsItems">
        {data.length ? (
          data.map((item: ProductsDataType) => (
            <li className="productItem" key={item.id}>
              <ProductItem item={item} />
            </li>
          ))
        ) : (
          <h2 className="productItemEmpty">Не найдено</h2>
        )}
      </ul>
    </>
  );
};
