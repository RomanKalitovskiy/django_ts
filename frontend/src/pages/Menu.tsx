import React from "react";
import MenuPosition from "components/MenuPosition";
import { useGetMenuPositionsQuery } from "api/menu.api";
import Loader from "components/Loader";
import NotFound from "components/NotFound";
import s from "pages/styles/Menu.module.scss";

interface MenuParams {
  categoryId: number;
}
const Menu: React.FC<MenuParams> = ({ categoryId }) => {
  const {
    isLoading,
    isError,
    data: menuPositions,
    isSuccess,
  } = useGetMenuPositionsQuery(categoryId);

  return (
    <section className={s.menuPositionsList}>
      {isLoading && <Loader />}
      {isError && <NotFound />}
      {isSuccess &&
        menuPositions.map((position) => (
          <MenuPosition key={position.id} position={position} />
        ))}
    </section>
  );
};
export default Menu;
