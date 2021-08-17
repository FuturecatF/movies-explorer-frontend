import './NavTab.css';
import { HashLink } from 'react-router-hash-link';
function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__item">
        <HashLink className="link-decoration-none" smooth to="#about">
          О проекте
        </HashLink>
      </li>

      <li className="navtab__item">
        <HashLink className="link-decoration-none" smooth to="#techs">
          Технологии
        </HashLink>
      </li>

      <li className="navtab__item">
        <HashLink className="link-decoration-none" smooth to="#about-me">
          Студент
        </HashLink>
      </li>
    </ul>
  );
}

export default NavTab;
