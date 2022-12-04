import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import { IMenuCategory } from "models/menu";

interface LayoutProps {
  categories: IMenuCategory[];
}

const Layout: React.FC<LayoutProps> = ({ categories }) => (
  <>
    <Header categories={categories} />
    <main>
      <Outlet />
    </main>
    <Footer categories={categories} />
  </>
);

export default Layout;
