import React from "react";
import { NavLink } from "react-router-dom";
import { IPage } from "../../Models/page";
import s from "./TopHeaderNavItem.module.scss";

type TopHeaderNavItemProps = { page: IPage };

export const TopHeaderNavItem: React.FC<TopHeaderNavItemProps> = ({
  page: { url, title },
}) => (
  <li className={s.topNavigationItem}>
    <NavLink to={url}>{title}</NavLink>
  </li>
);
