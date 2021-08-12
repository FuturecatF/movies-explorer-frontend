import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader'

function Movies({
  isLoading,
  beatFilmsArray,
  getSearchMovies,
  searchResultArray,
  isSearching,
  onCardClick,
  savedMovieIds,
  savedMovies,
  onDeleteClick
}) {
  return (
    <div className="movies">
      <SearchForm getSearchMovies={getSearchMovies} />

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
    </div>
  );
}

export default Movies;
