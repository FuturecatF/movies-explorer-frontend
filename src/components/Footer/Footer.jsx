import './Footer.css';

// import { Route,/*  Link, */ Switch } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer-content">
        <p className="footer-content__date">&copy; {new Date().getFullYear()}</p>
        <nav className="footer-navlinks">
          <ul className="footer-navlinks__items">
            <li className="footer-navlinks__item">Яндекс.Практикум</li>
            <li className="footer-navlinks__item">Github</li>
            <li className="footer-navlinks__item">Facebook</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
