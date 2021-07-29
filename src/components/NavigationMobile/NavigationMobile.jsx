import './NavigationMobile.css';
// import NavigationMobile from '../'
import { Link, NavLink } from 'react-router-dom';
function NavigationMobile({ closeMobileMenu }) {

  return (
    <div className="mobile-nav">
       <button className="mobile-nav__btn-close" onClick={closeMobileMenu}></button>
      <div className="mobile-nav__items">

        <NavLink
          exact to="/"
          className="mobile-nav__item"
          activeClassName="mobile-nav__item_underline"

        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className="mobile-nav__item"
          activeClassName="mobile-nav__item_underline"
        >
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="mobile-nav__item" activeClassName="mobile-nav__item_underline">
          Сохранённые фильмы
        </NavLink>
      </div>
      {/*  <div className="mobile-nav__btn-container"> */}
      <Link to="/profile" className="mobile-nav__item mobile-nav__item_profile">
        Аккаунт
      </Link>
      {/*  </div> */}
    </div>
  );
}

export default NavigationMobile;
