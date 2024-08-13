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

function App() {
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
              <About />
              <Categories />
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
