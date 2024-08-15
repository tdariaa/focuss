import { HashLink } from "react-router-hash-link";

import "./SideMenu.css";

export const SideMenu = () => {
  return (
    <div className="sideMenuContainer">
      <HashLink className="sideMenuItem" to="/#home">
        01
      </HashLink>
      <HashLink className="sideMenuItem" to="#products">
        02
      </HashLink>
      <HashLink className="sideMenuItem" to="#contacts">
        03
      </HashLink>
    </div>
  );
};
