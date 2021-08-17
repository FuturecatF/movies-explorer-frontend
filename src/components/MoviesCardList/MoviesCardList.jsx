import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList(props) {
  const {
    isLoading,
    searchResultArray,
    searchResultSavedArray,
    isSearching,
    onCardClick,
    savedMovies,
    savedMovieIds,
    onDeleteClick,
    isSearchingSaved,
  } = props;

  const location = useLocation();

  const [windowWidth, setWindowWidth] = React.useState(window.screen.width);
  const [countRenderedMovies, setCountRenderedMovies] = React.useState(0);
  const [addRenderedMovies, setAddRenderedMovies] = React.useState(0);

  React.useEffect(() => {
    const { startNumber, addNumber } = calculate(windowWidth);
    setCountRenderedMovies(startNumber);
    setAddRenderedMovies(addNumber);
  }, [windowWidth]);
  let timer;
  function resizedWindow() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => setWindowWidth(window.screen.width), 1000);
  }

  React.useEffect(() => {
    window.addEventListener('resize', resizedWindow);

    return () => window.removeEventListener('resize', resizedWindow);
  });

  function handleAddMovies() {
    setCountRenderedMovies(countRenderedMovies + addRenderedMovies);
  }

  const calculate = (windowWidth) => {
    let startNumber, addNumber;
    if (windowWidth > 768) {
      startNumber = 12;
      addNumber = 4;
    } else if (windowWidth > 480) {
      startNumber = 8;
      addNumber = 2;
    } else {
      startNumber = 5;
      addNumber = 2;
    }
    return { startNumber, addNumber };
  };

  return (
    <div className="movie-cardlist">
      <ul className="movies-items">
        {location.pathname === '/saved-movies'
          ? !isSearchingSaved
            ? savedMovies.map((film) => (
                <MoviesCard
                  film={film}
                  key={film._id}
                  savedMovieIds={savedMovieIds}
                  savedMovies={savedMovies}
                  onDeleteClick={onDeleteClick}
                  onCardClick={onCardClick}
                />
              ))
            : searchResultSavedArray.map((film) => (
                <MoviesCard
                  film={film}
                  key={film._id}
                  savedMovieIds={savedMovieIds}
                  savedMovies={savedMovies}
                  onDeleteClick={onDeleteClick}
                  onCardClick={onCardClick}
                />
              ))
          : isSearching &&
            searchResultArray.reduce((moviesToRender, film) => {
              if (moviesToRender.length < countRenderedMovies) {
                moviesToRender.push(
                  <MoviesCard
                    film={film}
                    key={film.id}
                    onCardClick={onCardClick}
                    savedMovieIds={savedMovieIds}
                    savedMovies={savedMovies}
                  />
                );
              }
              return moviesToRender;
            }, [])}
      </ul>

      {!isLoading && (
        <button
          className={`movie-cardlist__btn ${
            location.pathname === '/saved-movies' &&
            'movie-cardlist__btn_hidden'
          }
              ${
                location.pathname === '/movies'
                  ? searchResultArray.length <= countRenderedMovies
                    ? 'movie-cardlist__btn_hidden'
                    : ''
                  : ''
              }`}
          type="button"
          onClick={handleAddMovies}
        >
          Ещё
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
