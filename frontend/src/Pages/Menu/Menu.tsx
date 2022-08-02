import React from "react";
import MenuPosition from "../../Components/MenuPosition/MenuPosition";
import { useGetMenuPositionsQuery } from "../../store/menu/menu.api";

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

  const loading = <div>Loading...</div>;

  const error = <div>Error...</div>;

  const success = menuPositions.map((position) => (
    <MenuPosition key={position.id} position={position} />
  ));

  return (
    // const { isLoading, isError, data, isSuccess } = useGetMenuQuery(null);

    <>
      {isLoading && loading}
      {isError && error}
      {isSuccess && success}
    </>
  );
};
export default Menu;
