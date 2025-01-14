/* eslint-disable jsx-a11y/alt-text */
import "./Table.css";

type TableType = {
  images: Array<string>;
};

export const Table = ({ images }: TableType) => (
  <div id="mz-gallery-wrapper">
    <div id="mz-gallery-container">
      <div id="mz-gallery">
        {images.map((img) => (
          <figure key={img}>
            <img src={require(`src/images/products/${img}`)} />
          </figure>
        ))}
      </div>
    </div>
  </div>
);
