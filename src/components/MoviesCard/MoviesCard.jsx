import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';

function MoviesCard() {
  const location = useLocation();

  if (location.pathname === '/movies') {
    return (
      <li className="movies-item">
        <img className="movies-item__image" alt="Фото" src={image2}></img>
        <div className="movies-item__footer">
          <p className="movies-item__title">Киноальманах «100 лет дизайна»</p>
          <button
            className="movies-item__btn movies-item__btn_active"
            type="button"
          ></button>
        </div>
        <p className="movies-item__subtitle">1ч42м</p>
      </li>
    );
  } else if (location.pathname === '/saved-movies') {
    return (
      <li className="movies-item">
        <img className="movies-item__image" alt="Фото" src={image1}></img>
        <div className="movies-item__footer">
          <p className="movies-item__title">Киноальманах «100 лет дизайна»</p>
          <button className="movies-item__btn-delete" type="button"></button>
        </div>
        <p className="movies-item__subtitle">1ч42м</p>
      </li>
    );
  }
}

export default MoviesCard;
