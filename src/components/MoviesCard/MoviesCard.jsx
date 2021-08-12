import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({
  film,
  onCardClick,
  savedMovieIds,
  savedMovies,
  onDeleteClick,
}) {
  const location = useLocation();
  const { name = film.nameRU, duration, image, movieId } = film;
  const [isLiked, setIsLiked] = React.useState(false);
  //const isFucked = savedMovieIds.some((i) => i === movieId);
  const like = savedMovies.find((c) => c.movieId === movieId);
  React.useEffect(() => {
    if (savedMovieIds && like) {
      setIsLiked(true);
    }
  }, [like, savedMovieIds]);

  const realDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours > 0 ? hours + 'ч' : ''}${minutes}м`;
  };

  function handleLikeClick() {
    onCardClick(film);

    if (like) {
      setIsLiked(false);
    }
  }

  function handleDeleteClick() {
    onDeleteClick(film);
  }

  return (
    <li className="movies-item">
      <img className="movies-item__image" alt="Фото" src={image}></img>
      <div className="movies-item__footer">
        <p className="movies-item__title">{name}</p>
        <button
          className={`movies-item__btn ${
            isLiked ? 'movies-item__btn_active' : ''
          }`} // movies-item__btn_active
          type="button"
          onClick={
            location.pathname === '/movies'
              ? handleLikeClick
              : handleDeleteClick
          }
        ></button>
      </div>
      <p className="movies-item__subtitle">{realDuration(duration)}</p>
    </li>
  );
}

export default MoviesCard;
