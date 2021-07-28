import './SearchForm.css';
import searchIcon from '../../images/search.svg';
import searchInputIcon from '../../images/search-input.svg';
// import { Route,/*  Link, */ Switch } from "react-router-dom";
function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <label className="search-form__label-input">
          <img
            className="search-form__image-input"
            alt="Поиск"
            src={searchInputIcon}
          ></img>
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
          ></input>
        </label>
        <div className="search-form__menu">
          <button className="search-form__btn">
            <img className="search-form__image" src={searchIcon} alt="Найти" />
          </button>
          <div className="thumbler">
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider round"></span>

            </label>
            <p className="thumbler__title">Короткометражки</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
