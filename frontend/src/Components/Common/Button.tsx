// import {useNavigate} from 'react-router-dom'
import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  label: string;
  handleOnClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, handleOnClick }) => (
  <button className={s.button} onClick={handleOnClick} type="button">
    {label}
  </button>
);

export default Button;
