import './NavTab.css';
import { HashLink } from 'react-router-hash-link';
function NavTab() {
  return (
    <ul className="navtab">
      <HashLink className="navtab__hashlink" smooth to='/#about'>
        <li className="navtab__item">О проекте</li>
      </HashLink>
      <HashLink className="navtab__hashlink" smooth to='/#techs'>
        <li className="navtab__item">Технологии</li>
      </HashLink>
      <HashLink className="navtab__hashlink" smooth to='/#about-me'>
      <li className="navtab__item">Студент</li>
      </HashLink>
    </ul>
  );
}

export default NavTab;
