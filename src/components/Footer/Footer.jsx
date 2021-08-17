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
            <li className="footer-navlinks__item"><a className="link-decoration-none" rel="noreferrer" href="https://praktikum.yandex.ru/" target="_blank">Яндекс.Практикум</a></li>
            <li className="footer-navlinks__item"><a className="link-decoration-none" rel="noreferrer" href="https://github.com/FuturecatF" target="_blank">Github</a></li>
            <li className="footer-navlinks__item"><a className="link-decoration-none" rel="noreferrer" href="https://vk.com/starfen1x" target="_blank">VKontakte</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
