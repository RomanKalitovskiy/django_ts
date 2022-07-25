import s from "./Login.module.scss";

const Login = () => (
    <div className={s.login}>
      <form className={s.loginForm} noValidate>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </form>
    </div>
  )

export default Login;
