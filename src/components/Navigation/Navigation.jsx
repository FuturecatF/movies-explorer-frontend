import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/movies" className="nav__item">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="nav__item">
      Сохранённые фильмы
      </Link>
      <Link to="/signup" className="nav__item">
        Регистрация
      </Link>
      <Link to="/signin" className="nav__item nav__item_signin">
        Войти
      </Link>
      <Link to="/profile" className="nav__item">
        Аккаунт
      </Link>
    </div>
  );
}

export default Navigation;
