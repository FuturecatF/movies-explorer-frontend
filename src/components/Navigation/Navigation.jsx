import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
function Navigation({ openMobileMenu, isLoggedIn }) {
  return (
    <nav className="nav">
      <ul className="nav__items">
        <li
          className={`nav__item nav__item_mobile ${
            isLoggedIn ? 'nav__item_visible' : ''
          }`}
        >
          <NavLink
            to="/movies"
            className="link-decoration-none"
            activeClassName="nav__item_active"
          >
            Фильмы
          </NavLink>
        </li>

        <li
          className={`nav__item nav__item_mobile ${
            isLoggedIn ? 'nav__item_visible' : ''
          }`}
        >
          <NavLink
            to="/saved-movies"
            className="link-decoration-none"
            activeClassName="nav__item_active"
          >
            Сохранённые фильмы
          </NavLink>
        </li>

        <li className={` nav__item ${!isLoggedIn ? 'nav__item_visible' : ''}`}>
          <Link to="/signup" className="link-decoration-none">
            Регистрация
          </Link>
        </li>

        <li className={`nav__item ${!isLoggedIn ? 'nav__item_visible' : ''}`}>
          <Link to="/signin" className="nav__item-link link-decoration-none">
            <button className="nav__item-signin">Войти</button>
          </Link>
        </li>

        <li className={`nav__item ${isLoggedIn ? 'nav__item_visible' : ''}`}>
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
