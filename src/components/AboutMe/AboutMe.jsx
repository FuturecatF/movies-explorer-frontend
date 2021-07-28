import './AboutMe.css';
import authorPhoto from '../../images/author-photo.png';
function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title section-title">Студент</h2>

      <div className="about-me-container">
        <div className="about-me-container__content">
        <h3 className="about-me-container__title">Олег</h3>
        <p className="about-me-container__subtitle">
          Фронтенд-разработчик, 31 год
        </p>
        <p className="about-me-container__about">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>

        <nav className="about-me-navlinks">
          <ul className="about-me-navlinks__items">
            <li className="about-me-navlinks__item">VKontakte</li>
            <li className="about-me-navlinks__item">Github</li>
          </ul>
        </nav>
      </div>
      <img className="about-me-container__image" src={authorPhoto} alt="author"></img>
      </div>
    </section>
  );
}

export default AboutMe;
