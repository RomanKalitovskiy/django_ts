import MenuGroup from "../../Components/MenuGroup/MenuGroup";
import { useGetMenuQuery } from "../../store/menu/menu.api";

const Menu = () => {
  const { isLoading, isError, data, isSuccess } = useGetMenuQuery(null);

  const loading = <div>Loading...</div>;

  const error = <div>Error...</div>;

  const success = data?.map((group) => (
    <MenuGroup key={group.category} group={group} />
  ));

  return (
    <>
      <div>Menu</div>
      {isLoading && loading}
      {isError && error}
      {isSuccess && success}
    </>
  );
};

export default Menu;
