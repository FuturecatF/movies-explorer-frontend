import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
function SavedMovies({
  savedMovies,
  savedMovieIds,
  onDeleteClick,
  onCardClick,
  isLoading,
  getSearchMovies,
  searchResultSavedArray,
  isSearching,
}) {
  return (
    <div className="saved-movies">
      <SearchForm getSearchMovies={getSearchMovies}/>
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          savedMovies={savedMovies}
          savedMovieIds={savedMovieIds}
          onDeleteClick={onDeleteClick}
          onCardClick={onCardClick}
          searchResultSavedArray={searchResultSavedArray}
          isSearching={isSearching}
        />
      )}
    </div>
  );
}

export default SavedMovies;
