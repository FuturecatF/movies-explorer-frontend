import './Register.css';
import logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" alt="логотип" src={logo}></img>
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <input className="register__input" type="email" placeholder="Email" />
          <input className="register__input" type="password" placeholder="Пароль" />
          <button className="register__button">Зарегистрироваться</button>
          <p className="register__subtitle">
            Уже зарегистрированы?
            <Link className="register__link" to="/signin">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Register);
