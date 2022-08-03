import React from "react";
import MenuPosition from "../../Components/MenuPosition/MenuPosition";
import { useGetMenuPositionsQuery } from "../../store/menu/menu.api";
import Loader from "../../Components/Loader/Loader";
import PageNotFound from "../PageNotFound/PageNotFound";
import s from "./Menu.module.scss";

interface MenuParams {
  categoryId: number;
}
const Menu: React.FC<MenuParams> = ({ categoryId }) => {
  const {
    isLoading,
    isError,
    data: menuPositions = [],
    isSuccess,
  } = useGetMenuPositionsQuery(categoryId);

  const success = menuPositions.map((position) => (
    <MenuPosition key={position.id} position={position} />
  ));

  return (
    // const { isLoading, isError, data, isSuccess } = useGetMenuQuery(null);

    <section className={s.menuPositionsList}>
      {isLoading && <Loader />}
      {isError && <PageNotFound />}
      {isSuccess && success}
    </section>
  );
};
export default Menu;
