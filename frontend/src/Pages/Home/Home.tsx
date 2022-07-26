import s from "./Home.module.scss";

const Home = () => (
  <div className={s.homeBlock}>
    <input id="home-search" placeholder="Search something" />
  </div>
);

export default Home;
