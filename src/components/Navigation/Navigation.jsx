import './Navigation.css';
import { Link } from 'react-router-dom';
function Navigation({ openMobileMenu }) {
  return (
    <div className="nav">
      <Link to="/movies" className="nav__item nav__item_mobile">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="nav__item nav__item_mobile">
      Сохранённые фильмы
      </Link>
      <Link to="/signup" className="nav__item">
        Регистрация
      </Link>
      <Link to="/signin" className="nav__item nav__item_signin">
        Войти
      </Link>
      <Link to="/profile" className="nav__item nav__item__profile">
        Аккаунт
      </Link>
      <button className="nav__item-burger" onClick={openMobileMenu}></button>
    </div>
  );
}

export default Navigation;
