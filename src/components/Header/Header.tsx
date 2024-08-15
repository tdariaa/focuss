import { HashLink } from "react-router-hash-link";

import "./Header.css";

export const Header = () => (
  <header className="header">
    FOCUS
    <ul className="header__links">
      <li className="header__link">
        <HashLink className="header__link_item" to="#home">
          HOME
        </HashLink>
      </li>
      <li className="header__link">
        <HashLink className="header__link_item" to="#products">
          PRODUCTS
        </HashLink>
      </li>
      <li className="header__link">
        <HashLink className="header__link_item" to="#contacts">
          CONTACTS
        </HashLink>
      </li>
    </ul>
  </header>
);
