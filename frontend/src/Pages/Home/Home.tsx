import s from "./Home.module.scss";

const Home = () => (
  <div className={s.homeBlock}>
    <input id="home-search" placeholder="Search something" />
    <img
      className={s.homeImg}
      src="https://wallpaperaccess.com/full/271687.jpg"
      alt="Main food"
    />
  </div>
);

export default Home;
