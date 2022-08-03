import React from "react";
import { NavLink } from "react-router-dom";
import { IMenuCategory } from "models/menu";
import s from "components/styles/CategoryItem.module.scss";

type CategoryItemProps = { category: IMenuCategory };

const CategoryItem: React.FC<CategoryItemProps> = ({
  category: { category, url, icon },
}) => (
  <li className={s.bottomNavigationItem}>
    <NavLink to={url}>
      <img src={icon} alt={`${category} icon`} />
      <span>{category}</span>
    </NavLink>
  </li>
);

export default CategoryItem;
