import React from "react";
import { IMenuGroup } from "../../Models/menu";
import MenuPosition from "../MenuPosition/MenuPosition";
// import s from "./MenuGroup.module.scss";

type MenuGroupProps = { group: IMenuGroup };

const MenuGroup: React.FC<MenuGroupProps> = ({
  group: { category, results },
}) => (
  <div key={category}>
    <h1>{category}</h1>
    {results.map((menuPosition) => (
      <MenuPosition key={menuPosition.title} menuPosition={menuPosition} />
    ))}
  </div>
);

export default MenuGroup;
