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
  onCardClick
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
      />
    </div>
  );
}

export default Movies;
