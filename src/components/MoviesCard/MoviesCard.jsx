import './MoviesCard.css';
import React from 'react';

function MoviesCard({ film, onCardClick }) {
  const { name = film.nameRU, duration, image } = film;
  const [isLiked, setIsLiked] = React.useState(false);

  const realDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours > 0 ? hours + 'ч' : ''}${minutes}м`;
  };
function handleLikeClick() {
  onCardClick(film);
  setIsLiked(true);
}


  return (
    <li className="movies-item">
      <img className="movies-item__image" alt="Фото" src={image}></img>
      <div className="movies-item__footer">
        <p className="movies-item__title">{name}</p>
        <button

          className={`movies-item__btn ${isLiked ? 'movies-item__btn_active' : ''}`} // movies-item__btn_active
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
      <p className="movies-item__subtitle">{realDuration(duration)}</p>
    </li>
  );
}

export default MoviesCard;
