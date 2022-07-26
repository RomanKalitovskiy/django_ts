import React from "react";
import { NavLink } from "react-router-dom";
import { IMenuCategory } from "../../Models/menu";
import s from "./HeaderMenuCategoryItem.module.scss";

type HeaderMenuCategoryItemProps = { category: IMenuCategory };

export const HeaderMenuCategoryItem: React.FC<HeaderMenuCategoryItemProps> = ({
  category: { title, url, icon },
}) => (
  <li className={s.bottomNavigationItem}>
    <NavLink to={url}>
      <img src={icon} alt={`${title} icon`} />
      <span>{title}</span>
    </NavLink>
  </li>
);
