import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
// import { Route,/*  Link, */ Switch } from "react-router-dom";
function Movies() {
  return (
    <div className="movies">
      <Header />

      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;
