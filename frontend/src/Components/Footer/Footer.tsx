import s from "./Fotter.module.scss";
import { menuCategories } from "../../Configuration/categories";
import { HeaderMenuCategoryItem } from "../HeaderMenuCategoryItem/HeaderMenuCategoryItem";
import { pages } from "../../Configuration/pages";
import { TopHeaderNavItem } from "../TopHeaderNavItem/TopHeaderNavItem";
import instagram from "../../Assets/Icons/free-icon-instagram-2111463.png";
import facebook from "../../Assets/Icons/free-icon-facebook-174848.png";
import gmail from "../../Assets/Icons/free-icon-gmail-732200.png";

const Footer = () => (
  // @ts-ignore
  <footer className={s.footer}>
    <div className={`${s.footerItem} ${s.generalInfo}`}>
      <img
        className={`${s.logoFooter} ${s.generalInfoItem}`}
        src="https://mapizza.com.ua/wp-content/uploads/2022/03/logo-pizza-red.svg"
        alt="Ma Pizza logo"
        width="80%"
      />
      <div className={`${s.headerContacts} ${s.generalInfoItem}`}>
        <h4>
          <span>+38 098 85651 20</span>
        </h4>
        <p>щодня, 09:00 − 21:00</p>
      </div>
      <ul className={`${s.socialMedia} ${s.generalInfoItem}`}>
        <li>
          <a href="#insta">
            <img src={instagram} alt="Instagram icon" />
          </a>
        </li>
        <li>
          <a href="#face">
            <img src={facebook} alt="Facebook icon" />
          </a>
        </li>
        <li>
          <a href="#gmail">
            <img src={gmail} alt="Gmail icon" />
          </a>
        </li>
      </ul>
    </div>
    <div className={`${s.footerItem} ${s.footerMenu}`}>
      <span className={s.footerBlockSpan}>Меню:</span>
      <ul className={s.footerMenuUL}>
        {menuCategories.map((category) => (
          <HeaderMenuCategoryItem category={category} />
        ))}
      </ul>
    </div>
    <div className={`${s.footerItem} ${s.footerTopHeader}`}>
      <span className={s.footerBlockSpan}>Про компанію:</span>
      <ul className={s.footerTopHeaderUL}>
        {pages.map((page) => (
          <TopHeaderNavItem key={page.url} page={page} />
        ))}
      </ul>
    </div>
    <div className={`${s.footerItem} ${s.developersInfo}`}>
      <span className={s.footerBlockSpan}>Розробка сайту:</span>
      <ul className={s.developersUL}>
        <li className={s.developerItem}>
          <a href="https://github.com/RomanKalitovskiy">
            <img
              src="https://cdn-icons-png.flaticon.com/24/25/25231.png"
              alt="Github logo"
              width={20}
            />
          </a>
          <span>Roman Kalitovskiy</span>
        </li>
        <li className={s.developerItem}>
          <a href="https://github.com/popovycj">
            <img
              src="https://cdn-icons-png.flaticon.com/24/25/25231.png"
              alt="Github logo"
              width={20}
            />
          </a>
          <span>Marian Popovych</span>
        </li>
        <li className={s.developerItem}>
          <a href="https://github.com/andre4meister">
            <img
              src="https://cdn-icons-png.flaticon.com/24/25/25231.png"
              alt="Github logo"
              width={20}
            />
          </a>
          <span>Yarema Andrii</span>
        </li>
      </ul>
    </div>
  </footer>
);
export default Footer;
