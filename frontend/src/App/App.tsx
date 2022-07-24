import { Routes, Route } from "react-router-dom";
import s from "./App.module.scss";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Reservation from "../Components/Reservation/Reservation";
import Personal from "../Components/Personal/Personal";
import Account from "../Components/Account/Account";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <footer className={s.footer}>footer</footer>
    </div>
  );
}

export default App;
