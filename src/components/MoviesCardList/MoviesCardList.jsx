import './MoviesCardList.css';
 import MoviesCard from '../MoviesCard/MoviesCard'
import image1 from '../../images/image1.png';

function MoviesCardList() {
  return (
    <div className="movie-cardlist">
    <ul className="movies-items">
      <li className="movies-item">
        <img className="movies-item__image" alt="Фото" src={image1}></img>
        <div className="movies-item__footer">
          <p className="movies-item__title">33 слова о дизайне</p>
          <button className="movies-item__btn active" type="button"></button>
        </div>
        <p className="movies-item__subtitle">1ч42м</p>
      </li>
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
    <button className="movies-items__btn" type="button">Ещё</button>
    </div>
  );
}

export default MoviesCardList;
