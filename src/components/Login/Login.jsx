import './Login.css';
import logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" alt="логотип" src={logo}></img>
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <input className="login__input" type="email" placeholder="Email" />
          <input className="login__input" type="password" placeholder="Пароль" />
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
