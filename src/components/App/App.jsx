import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import MobileMenu from '../MobileMenu/MobileMenu';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect,
} from 'react-router-dom';
import * as auth from '../../utils/auth';
import { api } from '../../utils/MainApi';
import { getBeatMoviesFromApi } from '../../utils/MoviesApi';

function App() {
  const location = useLocation();

  const headerLocation = ['/', '/movies', '/saved-movies', '/profile'];
  const footerLocation = ['/', '/movies', '/saved-movies'];

  const shouldShowHeader = headerLocation.some(
    (item) => location.pathname === item
  );
  const shouldShowFooter = footerLocation.some(
    (item) => location.pathname === item
  );

  const [isMobileMenuOpen, SetIsMobileMenuOpen] = React.useState(false);
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isAuthError, setIsAuthError] = React.useState(String);
  const [isLoading, setIsLoading] = React.useState(false);
  const [beatFilmsArray, setBeatFilmsArray] = React.useState([]);
  const [searchResultArray, setSearchResultArray] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesId, setSavedMoviesId] = React.useState([]);

  function openMobileMenu() {
    SetIsMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    SetIsMobileMenuOpen(false);
  }

  function onRegister(data) {
    const { name, email, password } = data;
    auth
      .getRegister(name, email, password)
      .then((res) => {
        if (res) {
          onLogin(email, password);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Error: 409') {
          setIsAuthError('Пользователь с таким email уже существует');
        }
      });
  }

  function onLogin(email, password) {
    auth
      .getLogin(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 400) {
          return console.log('не передано одно из полей');
        } else if (err.status === 401) {
          return console.log('пользователь с email не найден');
        }
        return console.log(err.status);
      });
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            setCurrentUser(data);
          }
        })
        .catch((err) => {
          console.log(err.status);
          if (err.status === 401) {
            return console.log('Переданный токен некорректен ');
          } else if (!jwt) {
            return console.log('Токен не передан или передан не в том формате');
          }
          return console.log('error 500');
        });
    }
  }, [isLoggedIn]);

  function getBeatMovies() {
    setIsLoading(true);
    getBeatMoviesFromApi()
      .then((data) => {
        console.log(data);
        const moviesArray = data.map((item) => {
          return {
            ...item,
            nameRU: item.nameRU,
            nameEN: item.nameEN ? item.nameEN : item.nameRU,
            image: `https://api.nomoreparties.co${item.image.url}`,
            trailer: item.trailerLink,
            thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
            movieId: item.id,
            like: false,
          };
        });
        setBeatFilmsArray(moviesArray);
        console.log(moviesArray);
      })
      .catch((err) => console.log(err))
      .then(() => {
        setIsLoading(false);
      })
      .finally(() => {
        console.log('Ира любит тебя!');
      });
  }

  React.useEffect(() => {
    getBeatMovies();
  }, []);

  function getSearchMovies(keyword) {
    setIsSearching(true);
    const word = keyword.search.toLowerCase();

    const res = beatFilmsArray.filter((el) => {
      const nameRU = el.nameRU.toLowerCase();
      const nameEN = el.nameEN.toLowerCase();
      const description = el.description.toLowerCase();

      return (
        nameRU.includes(word) ||
        nameEN.includes(word) ||
        description.includes(word)
      );
    });

    console.log(res);
    setSearchResultArray(res);
  }

  /* function handleMovieLike(movie) {
    api
      .saveMovie(movie)
      .then((movie) => {
        const newMovie = {
          ...movie,
          like: true,
        };
        setSavedMovies([...savedMovies, newMovie])

         if (savedMovies.length > 0) {
          const res = savedMovies.filter((item)=> item.movieId !== item.id)
          setSavedMovies(savedMovies.splice(res));
        }

        console.log(savedMovies);

      })
      .catch((err) => console.log(err));
  } */

  const handleMovieLike = (movie) => {
    const like = savedMovies.some((i) =>
      i.movieId === movie.id ? true : false
    );
    // if (like) {
    if (!like) {
      api
        .saveMovie(movie)
        .then(() => {
          getMovies();
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      savedMovies.some((i) =>
        i.movieId === movie.id
          ? api
              .deleteMovie(i._id)
              .then(() => {
                getMovies();
              })
              .catch((err) => {
                console.log(err);
              })
          : ''
      );
    }
  };

  // удаление фильма из избранного
  function handleMovieDelete(movie) {
    api
      .deleteMovie(movie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie._id !== movie._id
        );
        const newIdArray = newSavedMovies.map((movie) => movie.movieId);
        setSavedMovies(newSavedMovies);
        setSavedMoviesId(newIdArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          {shouldShowHeader && (
            <Header openMobileMenu={openMobileMenu} isLoggedIn={isLoggedIn} />
          )}
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute
              path="/movies"
              component={Movies}
              isLoading={isLoading}
              beatFilmsArray={beatFilmsArray}
              getSearchMovies={getSearchMovies}
              searchResultArray={searchResultArray}
              isSearching={isSearching}
              onCardClick={handleMovieLike}
            />
            <ProtectedRoute path="/saved-movies" component={SavedMovies} />
            <ProtectedRoute
              path="/profile"
              component={Profile}
              currentUser={currentUser}
            />

            <Route path="/signup">
              <Register onRegister={onRegister} isAuthError={isAuthError} />
            </Route>
            <Route path="/signin">
              <Login onLogin={onLogin} />
            </Route>

            <Route path="*">
              <PageNotFound />
            </Route>
            <Route path="/">
              {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
            </Route>
          </Switch>
          {shouldShowFooter && <Footer />}

          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            closeMobileMenu={closeMobileMenu}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
