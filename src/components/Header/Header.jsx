import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ openMobileMenu }) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="логотип" src={logo}></img>
      </Link>
      <Navigation openMobileMenu={openMobileMenu}/>
    </header>
  );
}

export default Header;
