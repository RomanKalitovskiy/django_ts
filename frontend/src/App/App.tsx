import { Routes, Route } from "react-router-dom";
import s from "./App.module.scss";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Reservation from "../Pages/Reservation/Reservation";
import Personal from "../Pages/Personal/Personal";
import Account from "../Pages/Account/Account";
import Header from "../Pages/Header/Header";
import Login from "../Pages/Login/Login";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

interface IconsoleFunc {
  (input: string): void;
}

const App = () => {
  const arr: number[] = [5, 7, 4, 2, 1];
  const consoleInput: IconsoleFunc = (input: string) => {
    console.log(input);
  };

  return (
    <div className={s.app}>
      <Header />
      <main>
        <Routes>
          <Route
            path="/home"
            element={<Home consoleInput={consoleInput} arr={arr} />}
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer className={s.footer}>footer</footer>
    </div>
  );
}

export default App;
