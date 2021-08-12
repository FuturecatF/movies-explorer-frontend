import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function SavedMovies({ savedMovies, savedMovieIds, onDeleteClick, onCardClick }) {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList savedMovies={savedMovies} savedMovieIds={savedMovieIds} onDeleteClick={onDeleteClick} onCardClick={onCardClick}/>
    </div>
  );
}

export default SavedMovies;
