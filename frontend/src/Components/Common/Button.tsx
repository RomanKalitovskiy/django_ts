// import {useNavigate} from 'react-router-dom'
import s from "./Button.module.scss";

function Button() {
  return (
    <button className={s.button} type="button">
      {false ? "Logout" : "Login"}
    </button>
  );
}

export default Button;
