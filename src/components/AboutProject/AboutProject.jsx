import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">О проекте</h2>
      <div className="descriptions">
        <div className="description">
          <h3 className="description__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="description__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="description">
          <h3 className="description__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="description__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <p className="timeline-item__title timeline-item__title_frontend">1 неделя</p>
          <p className="timeline-item__subtitle">Back-end</p>
        </div>
        <div className="timeline-item">
          <p className="timeline-item__title">4 недели</p>
          <p className="timeline-item__subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
