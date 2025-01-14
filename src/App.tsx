import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Header,
  SideMenu,
  Main,
  About,
  Contacts,
  Categories,
  Products,
} from "src/components";
import { PageContainer } from "./shared/PageContainer";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/storage";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBJiOV1yPgKLoGXxApxPKOmorkHLC0wBp8",
  authDomain: "focusense-d6758.firebaseapp.com",
  databaseURL: "https://focusense-d6758-default-rtdb.firebaseio.com",
  projectId: "focusense-d6758",
  storageBucket: "focusense-d6758.appspot.com",
  messagingSenderId: "349187402276",
  appId: "1:349187402276:web:a9f1840122a542e47986b1",
  measurementId: "G-G1H7J0K368",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const storage = getStorage(app);

function App() {
  // useEffect(() => {
  //   getDownloadURL(ref(storage, "B4WFH_МАНУАЛ v1 (2).pdf")).then((url) =>
  //     console.log(url)
  //   );
  // }, []);
  useEffect(() => {
    const id = document.getElementById("products");
    if (!id) return;
    id.scrollIntoView();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageContainer />
              <Header />
              <SideMenu />
              <Main />
              <Categories />
              <About />
              <Contacts />
            </>
          }
        />
        <Route path=":category" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
