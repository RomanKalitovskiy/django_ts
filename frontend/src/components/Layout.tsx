import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import { IMenuCategory } from "models/menu";

interface LayoutProps {
  сategories: IMenuCategory[];
}

const Layout: React.FC<LayoutProps> = ({ сategories }) => (
  <>
    <Header categories={сategories} />
    <main>
      <Outlet />
    </main>
    <Footer categories={сategories} />
  </>
);

export default Layout;
