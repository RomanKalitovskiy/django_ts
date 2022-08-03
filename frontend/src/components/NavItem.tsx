import React from "react";
import { NavLink } from "react-router-dom";
import { IPage } from "models/page";
import s from "components/styles/NavItem.module.scss";

type NavItemProps = { page: IPage };

const NavItem: React.FC<NavItemProps> = ({ page: { url, title } }) => (
  <li className={s.topNavigationItem}>
    <NavLink to={url}>{title}</NavLink>
  </li>
);

export default NavItem;
