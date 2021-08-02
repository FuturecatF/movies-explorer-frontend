import './SearchForm.css';
import searchIcon from '../../images/search.svg';
import searchInputIcon from '../../images/search-input.svg';

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__container-input">
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
          <div className="search-form__btn-container">
            <button className="search-form__btn">
              <img
                className="search-form__image-btn"
                src={searchIcon}
                alt="Найти"
              />
            </button>
          </div>
        </div>
        <div className="search-form__container-menu">
          <div className="search-form__menu">
            <div className="thumbler">
              <label className="switch">
                <input type="checkbox" defaultChecked></input>

                <span className="slider round"></span>
              </label>
              <p className="thumbler__title">Короткометражки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
