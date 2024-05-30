import "./nav.css";
import HomeSvg from "../../ImageComponent/HomeSvg";
import SearchSvg from "../../ImageComponent/SearchSvg";
import LibrarySvg from "../../ImageComponent/LibrarySvg";
import { useState } from "react";
import { PAGE } from "../../Enum";

const Nav = ({ currentPage }) => {
  const menu = [
    {
      id: PAGE.HOME,
      name: "Home",
      icon: <HomeSvg />,
    },
    {
      id: PAGE.SEARCH,
      name: "Search",
      icon: <SearchSvg />,
    },
  ];

  return (
    <>
      <div className="left-side">
        <ul>
          {menu.map((obj, ind) => {
            return (
              <li key={ind} onClick={() => currentPage(obj?.id)}>
                {obj.icon}
                <span> {obj.name} </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="left-side-second">
        <div className="lib-title">
          <LibrarySvg /> <span> Your Library</span>
        </div>
      </div>
    </>
  );
};

export default Nav;
