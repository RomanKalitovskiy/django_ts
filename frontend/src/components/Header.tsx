import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "configuration/pages";
import { IMenuCategory } from "models/menu";
import NavItem from "components/NavItem";
import CategoryItem from "components/CategoryItem";
import s from "components/styles/Header.module.scss";
import basket from "../assets/icons/shopping-bag.png";

interface HeaderProps {
  categories: IMenuCategory[];
}

const Header: React.FC<HeaderProps> = ({ categories }) => {
  const [toggleTopMenu, setToggleTopMenu] = useState<boolean>(false);
  const [favouriteCount, setFavouriteCount] = useState<number>(0);

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
      </div>
      <div className={s.bottomHeader}>
        <div className={s.logoLink}>
          <NavLink to="/">
            <img
              className={s.logo}
              src="https://mapizza.com.ua/wp-content/uploads/2022/03/logo-pizza-red.svg"
              alt="Ma Pizza logo"
            />
          </NavLink>
        </div>

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
        <div className={s.login}>
          <button
            className={s.favouriteCount}
            type="button"
            onClick={() => setFavouriteCount(favouriteCount + 1)}
          >
            {favouriteCount}
          </button>
          <svg
            className={s.heartSVG}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="24"
            height="24"
            x="0"
            y="0"
            viewBox="0 0 24 24"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
              fill="currentColor"
            />
          </svg>
          <button className={s.loginButton} type="submit">
            <svg
              className={s.personSVG}
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
              <path
                d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"
                fill="currentColor"
              />
            </svg>
            <span>Вхід</span>
          </button>
        </div>
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
