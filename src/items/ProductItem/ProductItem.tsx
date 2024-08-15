import "./ProductItem.css";

export const ProductItem = ({ item }: any) => {
  return (
    <div className="productItemContainer">
      <p className="productItemTitle">{item.title}</p>
      <div className="productItemInfo">
        <div className="productItemImg"></div>
        <ul className="productItemСharacteristics">
          <li className="productItemPoint">{item.resolution}</li>
          <li className="productItemPoint">{item.focalLength}</li>
          <li className="productItemPoint">{item.microphone}</li>
          <li className="productItemPoint">{item.dynamic}</li>
          <li className="productItemPoint">{item.memoryСard}</li>
          <li className="productItemPoint">{item.wifi}</li>
        </ul>
      </div>
      <button className="productItemMore">подробнее</button>
    </div>
  );
};
