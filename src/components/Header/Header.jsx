import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="логотип" src={logo}></img>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
