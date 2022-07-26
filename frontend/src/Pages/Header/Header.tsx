import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import Button from "../../Components/Common/Button";

const Header = () => (
  <header>
    <nav>
      <ul className={s.navigation}>
        <li className={s.navItem}>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/reservation">Reservation</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/personal">Personal</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/account">My account</NavLink>
        </li>
      </ul>
    </nav>
    <Button label="" handleOnClick={() => {}} />
  </header>
);

export default Header;
