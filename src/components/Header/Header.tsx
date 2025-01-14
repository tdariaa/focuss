import { HashLink } from "react-router-hash-link";

import "./Header.css";

export const Header = () => (
  <header className="header">
    FOCUSENSE
    <ul className="header__links">
      <li className="header__link">
        <HashLink className="header__link_item" to="#home">
          ГЛАВНАЯ
        </HashLink>
      </li>
      <li className="header__link">
        <HashLink className="header__link_item" to="#products">
          ТОВАРЫ
        </HashLink>
      </li>
      <li className="header__link">
        <HashLink className="header__link_item" to="#contacts">
          КОНТАКТЫ
        </HashLink>
      </li>
    </ul>
  </header>
);
