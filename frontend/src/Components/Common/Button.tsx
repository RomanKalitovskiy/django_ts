// import {useNavigate} from 'react-router-dom'
import s from "./Button.module.scss";

function Button() {
  const authorize: boolean = false;
  return (
    <button className={s.button} type="button">
      {authorize ? "Logout" : "Login"}
    </button>
  );
}

export default Button;
