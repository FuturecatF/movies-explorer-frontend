import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
  const { isLoading, beatFilmsArray, searchResultArray, isSearching, onCardClick } = props;
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

  function handleAddButton() {
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
      {isLoading && <Preloader />}
      <ul className="movies-items">
        {isSearching &&
          searchResultArray.map((film) => (
            <MoviesCard film={film} key={film.id} />
          ))}
        {!isSearching &&
          beatFilmsArray.reduce((moviesToRender, film) => {
            if (moviesToRender.length < countRenderedMovies) {
              moviesToRender.push(<MoviesCard film={film} key={film.id} onCardClick={onCardClick}/>);
            }
            return moviesToRender;
          }, [])}
      </ul>
      {!isLoading && (
        <button
          className="movie-cardlist__btn"
          type="button"
          onClick={handleAddButton}
        >
          Ещё
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
