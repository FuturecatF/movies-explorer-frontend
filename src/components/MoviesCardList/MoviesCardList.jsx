import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import image1 from '../../images/image1.png';

function MoviesCardList() {
  return (
    <div className="movie-cardlist">
      <ul className="movies-items">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <button className="movie-cardlist__btn" type="button">
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
