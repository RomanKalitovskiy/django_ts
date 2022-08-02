import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import heart from "../../Assets/Icons/heart.png";
import basket from "../../Assets/Icons/shopping-bag.png";

import person from "../../Assets/Icons/user.png";
import { TopHeaderNavItem } from "../TopHeaderNavItem/TopHeaderNavItem";
import { pages } from "../../Configuration/pages";
import { HeaderMenuCategoryItem } from "../HeaderMenuCategoryItem/HeaderMenuCategoryItem";
import { IMenuCategory } from "../../Models/menu";

interface HeaderProps {
  menuCategories: IMenuCategory[];
}
const Header: React.FC<HeaderProps> = ({ menuCategories }) => {
  const [toggleTopMenu, setToggleTopMenu] = useState<boolean>(false);

  return (
    <header id="header">
      <div
        className={`${s.topHeader} ${
          toggleTopMenu ? s.topHeaderSmall : s.topHeaderSmallHidden
        }`}
      >
        <div className={s.headerContacts}>
          <h4>
            <span>+38 098 85651 20</span>
          </h4>
          <p>щодня, 09:00 − 21:00</p>
        </div>
        <nav className={s.topNavigation}>
          <ul className={s.topNavigationUL}>
            {pages.map((page) => (
              <TopHeaderNavItem key={page.url} page={page} />
            ))}
          </ul>
        </nav>
        <div className={s.login}>
          <img src={heart} alt="Favourite list" />
          <button type="submit">
            <img src={person} alt="User" />
            <span>Вхід</span>
          </button>
        </div>
      </div>
      <div className={s.bottomHeader}>
        <NavLink to="/">
          <img
            className={s.logo}
            src="https://mapizza.com.ua/wp-content/uploads/2022/03/logo-pizza-red.svg"
            alt="Ma Pizza logo"
          />
        </NavLink>
        <ul
          className={
            !toggleTopMenu
              ? `${s.bottomHeaderULAnimated} ${s.bottomHeaderUL}`
              : `${s.bottomHeaderULHidden} ${s.bottomHeaderUL}`
          }
        >
          {menuCategories.map((category) => (
            <HeaderMenuCategoryItem key={category.id} category={category} />
          ))}
        </ul>
        <div className={s.basket}>
          <img src={basket} alt="Shopping bag" />
          <button className={s.basketCount} type="button">
            {0}
          </button>
          <span>0 грн</span>
          <button
            type="button"
            className={s.burgerMenuIcon}
            onClick={() => setToggleTopMenu(!toggleTopMenu)}
          >
            <div>{}</div>
            <div>{}</div>
            <div>{}</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
