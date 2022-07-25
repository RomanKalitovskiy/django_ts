import s from "./PageNotFound.module.scss";

const PageNotFound = () => (
    <div className={s.notFoundBlock}>
      <img
        className={s.notFoundImg}
        src="https://i.pinimg.com/originals/23/73/6e/23736e5af84855ef8458126d8775732b.jpg"
        alt="Page not found"
      />
    </div>
  )

export default PageNotFound;
