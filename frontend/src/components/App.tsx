import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NotFound from "components/NotFound";
import Loader from "components/Loader";
import Error from "components/Error";
import Layout from "components/Layout";
import Menu from "pages/Menu";
import { useGetMenuCategoriesQuery } from "api/menu.api";
import s from "components/styles/App.module.scss";
import About from "../pages/About";

const App: React.FC = () => {
  const {
    isLoading,
    isError,
    data: categories,
    isSuccess,
  } = useGetMenuCategoriesQuery();

  return (
    <div className={s.app}>
      {isLoading && <Loader />}
      {isError && <Error />}
      {isSuccess &&
        (categories.length ? (
          <Routes>
            <Route path="/" element={<Layout categories={categories} />}>
              <Route
                index
                element={<Navigate to={categories[0].url} replace />}
              />
              {categories.map(({ id, url }) => (
                <Route key={id} path={url} element={<Menu categoryId={id} />} />
              ))}

              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="about" element={<About />} />
          </Routes>
        ) : (
          <Error />
        ))}
    </div>
  );
};

export default App;
