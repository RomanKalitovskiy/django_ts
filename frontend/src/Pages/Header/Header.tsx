import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import heart from "../../Assets/Icons/heart.png";
import basket from "../../Assets/Icons/shopping-bag.png";
import person from "../../Assets/Icons/user.png";
import menu1 from "../../Assets/Icons/i-menu-1.svg";
import menu2 from "../../Assets/Icons/i-menu-2.svg";
import menu3 from "../../Assets/Icons/i-menu-3.svg";
import menu4 from "../../Assets/Icons/i-menu-4.svg";

const Header = () => {
  const [basketCount, setBasketCount] = useState(0);
  return (
    <header>
      <div className={s.topHeader}>
        <div className={s.headerContacts}>
          <h4>
            <NavLink to="/contacts">+38 098 85651 20</NavLink>
          </h4>
          <p>щодня, 09:00 − 21:00</p>
        </div>
        <nav className={s.topNavigation}>
          <ul className={s.topNavigationUL}>
            <li className={s.topNavigationItem}>
              <NavLink to="/about">Про нас</NavLink>
            </li>
            <li className={s.topNavigationItem}>
              <NavLink to="/delivery">Доставка та оплата</NavLink>
            </li>
            <li className={s.topNavigationItem}>
              <NavLink to="/discounts">Акції</NavLink>
            </li>
            <li className={s.topNavigationItem}>
              <NavLink to="/contacts">Контакти</NavLink>
            </li>
            <li className={s.topNavigationItem}>
              <NavLink to="/job">Вакансії</NavLink>
            </li>
            <li className={s.topNavigationItem}>
              <NavLink to="/news">Новини</NavLink>
            </li>
            <li className={s.topNavigationItem}>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
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
            src="https://mapizza.com.ua/wp-content/uploads/2022/03/logo-pizza-red.svg"
            alt="Ma Pizza logo"
          />
        </NavLink>
        <ul className={s.bottomHeaderUL}>
          <li className={s.bottomNavigationItem}>
            <NavLink to="/pizza">
              <img src={menu1} alt="Menu pizza" />
              <span>ПІЦА</span>
            </NavLink>
          </li>
          <li className={s.bottomNavigationItem}>
            <NavLink to="/salads">
              <img src={menu2} alt="Menu salads" />
              <span>САЛАТИ</span>
            </NavLink>
          </li>
          <li className={s.bottomNavigationItem}>
            <NavLink to="/deserts">
              <img src={menu3} alt="Menu deserts" />
              <span>ДЕСЕРТИ</span>
            </NavLink>
          </li>
          <li className={s.bottomNavigationItem}>
            <NavLink to="/drinks">
              <img src={menu4} alt="Menu drinks" />
              <span>НАПОЇ</span>
            </NavLink>
          </li>
        </ul>
        <div className={s.basket}>
          <img src={basket} alt="Shopping bag" />
          <button
            className={s.basketCount}
            type="button"
            onClick={() => setBasketCount((prevState) => prevState + 1)}
          >
            {basketCount}
          </button>
          <span>0 грн</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
