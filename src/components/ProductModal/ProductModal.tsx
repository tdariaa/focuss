import { AllCatigoriesName, getEnumKeys, ProductsDataType } from "src/utils";
import "./ProductModal.css";
import { Table } from "src/shared/Table/Table";
import { SyntheticEvent, useState } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/storage";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBJiOV1yPgKLoGXxApxPKOmorkHLC0wBp8",
  authDomain: "focusense-d6758.firebaseapp.com",
  projectId: "focusense-d6758",
  storageBucket: "focusense-d6758.appspot.com",
  messagingSenderId: "349187402276",
  appId: "1:349187402276:web:a9f1840122a542e47986b1",
  measurementId: "G-G1H7J0K368",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export type ProductModalType = {
  item: ProductsDataType;
  visibleHandler: (e: SyntheticEvent) => void;
};

export const ProductModal = ({ item, visibleHandler }: ProductModalType) => {
  // const [url, setUrl] = useState("");

  const handleClick = (path: string) => {
    getDownloadURL(ref(storage, `${path}`))
      .then((url) => (window.location.href = url))
      .catch((err) => {});
  };

  return (
    <div className="overlay" onClick={visibleHandler}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <h1 className="titleModal">{item.title}</h1>
        <button className="closeButton" onClick={visibleHandler} />
        {item.galleryImage.length ? <Table images={item.galleryImage} /> : null}
        {getEnumKeys(AllCatigoriesName).map((property) =>
          item[property] ? (
            <div key={property} className="propertyTable">
              <p className="propertyTitle">{AllCatigoriesName[property]}</p>
              <p className="propertyInfo">{item[property]}</p>
            </div>
          ) : null
        )}
        <a
          className="downloadLink"
          href={item.userManual}
          target="_blank"
          rel="noreferrer"
        >
          Скачать спецификацию
        </a>
        <a
          className="downloadLink"
          href={item.userManual}
          target="_blank"
          rel="noreferrer"
        >
          Скачать мануал
        </a>
        <a
          className="downloadLink"
          href="https://app.koofr.net/content/links/615f3041-3999-4b76-be92-a93799d29164/files/get/PC%20Client.zip?path=%2F&password=847601&force"
          // download={url}
          onClick={() => handleClick("PC Client.zip")}
          target="_blank"
          // rel="noreferrer"
        >
          Скачать PC Client
        </a>
        <a
          className="downloadLink"
          href="https://app.koofr.net/content/links/e886a3b4-b445-4608-bc84-aa7b5941d5ac/files/get/Tools.zip?path=%2F&password=976063&force"
          // download={url}
          // onClick={() => handleClick("Tools.zip")}
          target="_blank"
          // rel="noreferrer"
        >
          Скачать Tools.zip
        </a>
      </div>
    </div>
  );
};
