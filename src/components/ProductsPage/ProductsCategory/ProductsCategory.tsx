import { ProductItem } from "src/items/ProductItem/ProductItem";
import "./ProductsCategory.css";

export const ProductsCategory = ({ data }: any) => (
  <>
    <ul className="productsItems">
      {data.map((item: any) => (
        <li className="productItem" key={item.id}>
          <ProductItem item={item} />
        </li>
      ))}
    </ul>
  </>
);
