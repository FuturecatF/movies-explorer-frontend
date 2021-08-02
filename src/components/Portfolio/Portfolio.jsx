import './Portfolio.css';
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio-navlinks">
        <ul className="portfolio-navlinks__items">
          <li className="portfolio-navlinks__item">
            <a
              className="portfolio-navlinks__item-link link-decoration-none"
              rel="noreferrer"
              href="https://github.com/FuturecatF/how-to-learn"
              target="_blank"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfolio-navlinks__item">
            <a
              className="portfolio-navlinks__item-link link-decoration-none"
              rel="noreferrer"
              href="https://futurecatf.github.io/russian-travel/"
              target="_blank"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio-navlinks__item">
            <a
              className="portfolio-navlinks__item-link link-decoration-none"
              rel="noreferrer"
              href="https://futurecat.nomoredomains.club/"
              target="_blank"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
