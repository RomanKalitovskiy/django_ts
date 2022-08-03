import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "configuration/pages";
import { IMenuCategory } from "models/menu";
import heart from "assets/icons/heart.png";
import basket from "assets/icons/shopping-bag.png";
import person from "assets/icons/user.png";
import NavItem from "components/NavItem";
import CategoryItem from "components/CategoryItem";
import s from "components/styles/Header.module.scss";

interface HeaderProps {
  categories: IMenuCategory[];
}
const Header: React.FC<HeaderProps> = ({ categories }) => {
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
              <NavItem key={page.url} page={page} />
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
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
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
