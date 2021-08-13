import './SearchForm.css';
import searchIcon from '../../images/search.svg';
import searchInputIcon from '../../images/search-input.svg';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
function SearchForm({ getSearchMovies }) {
  const location = useLocation();
  const form = useForm();
  const {
    register,
    handleSubmit,
  } = form;
const path = location.pathname;
  const onSubmit = (data) => {
    getSearchMovies(data, path);
    console.log(data);
  };

  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__container-input" onSubmit={handleSubmit(onSubmit)}
          noValidate>
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
              {...register('search', { required: true })}
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
        </form>
        <div className="search-form__container-menu">
          <div className="search-form__menu">
            <div className="thumbler">
              <label className="switch">
                <input type="checkbox" {...register('checkbox')}></input>

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
