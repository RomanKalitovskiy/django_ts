import React from "react";
import { Routes, Route } from "react-router-dom";
import s from "./App.module.scss";
// import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Reservation from "../Pages/Reservation/Reservation";
import Personal from "../Pages/Personal/Personal";
import Account from "../Pages/Account/Account";
import Header from "../Components/Header/Header";
import Login from "../Pages/Login/Login";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Footer from "../Components/Footer/Footer";
import { useGetMenuCategoriesQuery } from "../store/menu/menu.api";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";

const App: React.FC = () => {
  const {
    isLoading,
    isError,
    data: menuCategories,
    isSuccess,
  } = useGetMenuCategoriesQuery(undefined);

  return (
    <div className={s.app}>
      {isLoading && <LoadingPage />}
      {isError && <PageNotFound />}
      {isSuccess && (
        <>
          <Header menuCategories={menuCategories} />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  menuCategories.length > 0 ? (
                    <Menu categoryId={menuCategories[0].id} />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
              {menuCategories.map((category) => (
                <Route
                  key={category.id}
                  path={`${category.url}`}
                  element={<Menu categoryId={category.id} />}
                />
              ))}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer menuCategories={menuCategories} />
        </>
      )}
    </div>
  );
};

export default App;
