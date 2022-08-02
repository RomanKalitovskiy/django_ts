import React from "react";
import { IMenuPosition } from "../../Models/menu";
// import s from "./MenuPosition.module.scss";

type MenuPositionProps = { position: IMenuPosition };

const MenuPosition: React.FC<MenuPositionProps> = ({
  position: { title, description },
}) => (
  <div>
    <div>{title}</div>
    <div>{description}</div>
  </div>
);

export default MenuPosition;
