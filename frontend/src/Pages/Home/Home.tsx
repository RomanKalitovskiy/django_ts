import React, { useState } from "react";
import s from "./Home.module.scss";

interface IHomeProps {
  consoleInput: string;
}
const Home: React.FC<IHomeProps> = ({ consoleInput }) => {
  const [searchText, setSearchText] = useState<string>("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      consoleInput(searchText);
      setSearchText("");
    }
  };

  return (
    <div className={s.homeBlock}>
      <input
        id="home-search"
        placeholder="Search something"
        value={searchText}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <img
        className={s.homeImg}
        src="https://wallpaperaccess.com/full/271687.jpg"
        alt="Main food"
      />
    </div>
  );
};

export default Home;
