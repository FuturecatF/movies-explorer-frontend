import './Login.css';
import logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Link className="login__img-link" to="/">
          <img className="login__logo" alt="логотип" src={logo}></img>
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <label className="login__input-label" for="login-input-email">
          Email
          </label>
          <input className="login__input" type="email" id="login-input"/>

          <label className="login__input-label" for="login-input-password">
          Пароль
          </label>
          <input className="login__input login__input_color-red" type="password" />
          <p className="login__input-error">Что-то пошло не так...</p>
          <button className="login__button">Войти</button>
          <p className="login__subtitle">
            Ещё не зарегистрированы?
            <Link className="login__link" to="/signup">
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
