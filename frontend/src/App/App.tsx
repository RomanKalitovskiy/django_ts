import { NavLink, Routes, Route } from "react-router-dom";
import s from "./App.module.scss";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Reservation from "../Components/Reservation/Reservation";
import Personal from "../Components/Personal/Personal";
import Account from "../Components/Account/Account";

function App() {
  return (
    <div className={s.app}>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/reservation">Reservation</NavLink>
            </li>
            <li>
              <NavLink to="/personal">Personal</NavLink>
            </li>
            <li>
              <NavLink to="/account">My account</NavLink>
            </li>
          </ul>
          <button type="submit">Login</button>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
