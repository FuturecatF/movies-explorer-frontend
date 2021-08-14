import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  const {
    isLoading,
    getSearchMovies,
    searchResultArray,
    isSearching,
    onCardClick,
    savedMovieIds,
    savedMovies,
    onDeleteClick,
    isSearchError,
  } = props;

  return (
    <section className="movies">
      <SearchForm getSearchMovies={getSearchMovies} />
      {!searchResultArray.length && isSearching && !isLoading ? (
        <p className="movies__error">
          {isSearchError ? isSearchError : 'Ничего не найдено'}
        </p>
      ) : (
        ''
      )}
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          isLoading={isLoading}
          searchResultArray={searchResultArray}
          isSearching={isSearching}
          onCardClick={onCardClick}
          savedMovieIds={savedMovieIds}
          savedMovies={savedMovies}
          onDeleteClick={onDeleteClick}
        />
      )}


    </section>
  );
}

export default Movies;
