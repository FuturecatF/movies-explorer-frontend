import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
function SavedMovies(props) {
  const {
    savedMovies,
    savedMovieIds,
    onDeleteClick,
    onCardClick,
    isLoading,
    getSearchMovies,
    searchResultSavedArray,
    isSearchingSaved,
  } = props;
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
          isSearchingSaved={isSearchingSaved}
        />
      )}
    </div>
  );
}

export default SavedMovies;
