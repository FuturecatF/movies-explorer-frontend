import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  const {
    isLoading,
    beatFilmsArray,
    getSearchMovies,
    searchResultArray,
    isSearching,
    onCardClick,
    savedMovieIds,
    savedMovies,
    onDeleteClick,
  } = props;

  /* if (searchResultArray.length === 0 && isSearching) {
    return <div className="movies__not-found">Ничего не найдено</div>;
  } */

  return (
    <section className="movies">
      <SearchForm getSearchMovies={getSearchMovies} />
      {isLoading ? (
        <Preloader />
      ) :  (
        <MoviesCardList
          isLoading={isLoading}
          beatFilmsArray={beatFilmsArray}
          searchResultArray={searchResultArray}
          isSearching={isSearching}
          onCardClick={onCardClick}
          savedMovieIds={savedMovieIds}
          savedMovies={savedMovies}
          onDeleteClick={onDeleteClick}
        />

      )}

{!searchResultArray.length && isSearching ? <p>Ничего не найдено</p> : '' }
    </section >
  );
}

export default Movies;
