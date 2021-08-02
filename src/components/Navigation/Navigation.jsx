import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
function Navigation({ openMobileMenu }) {
  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item nav__item_mobile">
          <NavLink
            to="/movies"
            className="link-decoration-none"
            activeClassName="nav__item_active"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="nav__item nav__item_mobile">
          <NavLink
            to="/saved-movies"
            className="link-decoration-none"
            activeClassName="nav__item_active"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="nav__item">
          <Link to="/signup" className="link-decoration-none">
            Регистрация
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/signin" className="nav__item-link link-decoration-none">
            <button className="nav__item-signin">Войти</button>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/profile" className="nav__item-link link-decoration-none">
            <button className="nav__item-profile">Аккаунт</button>
          </Link>
        </li>
      </ul>
      <button className="nav__item-burger" onClick={openMobileMenu}></button>
    </nav>
  );
}

export default Navigation;
