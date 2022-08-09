import React from "react";
import { pages } from "configuration/pages";
import { IMenuCategory } from "models/menu";
import CategoryItem from "components/CategoryItem";
import NavItem from "components/NavItem";
import s from "components/styles/Footer.module.scss";
import gmail from "../assets/icons/gmail.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";

interface FooterProps {
  categories: IMenuCategory[];
}

const Footer: React.FC<FooterProps> = ({ categories }) => (
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
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
    </div>
    <div className={`${s.footerItem} ${s.footerTopHeader}`}>
      <span className={s.footerBlockSpan}>Про компанію:</span>
      <ul className={s.footerTopHeaderUL}>
        {pages.map((page) => (
          <NavItem key={page.url} page={page} />
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
