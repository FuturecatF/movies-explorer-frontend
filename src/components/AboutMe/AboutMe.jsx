import './AboutMe.css';
import authorPhoto from '../../images/author-photo.png';
function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title section-title">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__content">
        <h3 className="about-me__name">Олег</h3>
        <p className="about-me__subtitle">
          Фронтенд-разработчик, 31 год
        </p>
        <p className="about-me__about">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>

        <nav className="about-me__navlinks">
          <ul className="about-me__nav-items">
            <li className="about-me__nav-item"><a className="link-decoration-none" rel="noreferrer" href="https://vk.com/starfen1x" target="_blank">VKontakte</a></li>
            <li className="about-me__nav-item"><a className="link-decoration-none" rel="noreferrer" href="https://github.com/FuturecatF" target="_blank">Github</a></li>
          </ul>
        </nav>
      </div>
      <img className="about-me__image" src={authorPhoto} alt="author"></img>
      </div>
    </section>
  );
}

export default AboutMe;
