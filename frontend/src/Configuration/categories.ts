import { IMenuCategory } from "../Models/menu";
import menu1 from "../Assets/Icons/i-menu-1.svg";
import menu2 from "../Assets/Icons/i-menu-2.svg";
import menu3 from "../Assets/Icons/i-menu-3.svg";
import menu4 from "../Assets/Icons/i-menu-4.svg";

export const menuCategories: IMenuCategory[] = [
  { title: "ПІЦА", url: "/pizza", icon: menu1 },
  { title: "САЛАТИ", url: "/salads", icon: menu2 },
  { title: "ДЕСЕРТИ", url: "/deserts", icon: menu3 },
  { title: "НАПОЇ", url: "/drinks", icon: menu4 },
];
