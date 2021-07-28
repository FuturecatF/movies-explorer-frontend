import './MoviesCard.css';
import image2 from '../../images/image2.png';
// import { Route,/*  Link, */ Switch } from "react-router-dom";
function MoviesCard() {
  return (
<li className="movies-item">
        <img className="movies-item__image" alt="Фото" src={image2}></img>
        <div className="movies-item__footer">
          <p className="movies-item__title">Киноальманах «100 лет дизайна»</p>
          <button className="movies-item__btn" type="button"></button>
        </div>
        <p className="movies-item__subtitle">1ч42м</p>
      </li>
    );
}

export default MoviesCard;
