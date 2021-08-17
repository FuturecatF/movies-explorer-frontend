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
import {
  SHORTMOVIETIME,
  HEADERLOCATION,
  FOOTERLOCATION,
  ERROR409,
  ERROR401,
  CARDDELETED,
  REQUESTERROR,
  DUBLICATEEMAIL,
  SERVERERROR,
  AUTHERROR,
  DEFAULTRAILER,
  DEFAULTIMAGE,
} from '../../utils/config';

function App() {
  const location = useLocation();
  const history = useHistory();

  const shouldShowHeader = HEADERLOCATION.some(
    (item) => location.pathname === item
  );
  const shouldShowFooter = FOOTERLOCATION.some(
    (item) => location.pathname === item
  );

  const [isMobileMenuOpen, SetIsMobileMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isRegisterError, setIsRegisterError] = React.useState('');
  const [isLoginError, setIsLoginError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [beatFilmsArray, setBeatFilmsArray] = React.useState([]);
  const [searchResultArray, setSearchResultArray] = React.useState([]);
  const [searchResultSavedArray, setSearchResultSavedArray] = React.useState(
    []
  );
  const [isSearching, setIsSearching] = React.useState(false);
  const [isSearchingSaved, setIsSearchingSaved] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMovieIds, setSavedMovieIds] = React.useState([]);
  const [isSearchError, setIsSearchError] = React.useState('');
  const [isSearchSavedError, setIsSearchSavedError] = React.useState('');

  const [isUpdateProfileError, setIsUpdateProfileError] = React.useState('');
  const [isValidRegister, setIsValidRegister] = React.useState(true);
  React.useEffect(() => {
    if (isLoggedIn) {
      api
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data.reverse());
        })
        .catch((err) => {
          setIsSearchSavedError(REQUESTERROR);
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  function openMobileMenu() {
    SetIsMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    SetIsMobileMenuOpen(false);
  }

  function onRegister(data) {
    const { name, email, password } = data;
    setIsValidRegister(false);
    auth
      .getRegister(name, email, password)
      .then((res) => {
        if (res) {
          onLogin(email, password);
        }
      })
      .then(() => setIsValidRegister(true))
      .catch((err) => {
        console.log(err);
        if (err === ERROR409) {
          setIsRegisterError(DUBLICATEEMAIL);
        } else setIsRegisterError(SERVERERROR);
      });
  }

  function onLogin(email, password) {
    getBeatMovies();
    auth
      .getLogin(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        if (err === ERROR401) {
          setIsLoginError(AUTHERROR);
        }
        console.log(err);
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
          console.log(err);
          if (err === ERROR401) {
            console.log('Переданный токен некорректен ');
          } else if (!jwt) {
            console.log('Токен не передан или передан не в том формате');
          }
          console.log('error 500');
        });
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    getBeatMovies();
  }, []);

  function getBeatMovies() {
    getBeatMoviesFromApi()
      .then((data) => {
        const pattern = /^http[s]?:\/\/\w+/;

        const moviesArray = data.map((item) => {
          return {
            ...item,
            nameRU: item.nameRU,
            nameEN: item.nameEN ? item.nameEN : item.nameRU,
            image: `${DEFAULTIMAGE}${item.image.url}`,
            trailer:
              item.trailerLink === null || !pattern.test(item.trailerLink)
                ? DEFAULTRAILER
                : item.trailerLink,
            thumbnail: `${DEFAULTIMAGE}${item.image.formats.thumbnail.url}`,
            movieId: item.id,
          };
        });
        setBeatFilmsArray(moviesArray);
      })
      .catch((err) => {
        setIsSearchError(REQUESTERROR);
        console.log(err);
      });
  }

  function getSearchResult(data, array, setArray) {
    setIsLoading(true);

    if (array === beatFilmsArray) {
      setIsSearching(true);
      setIsSearchingSaved(false);
    } else if (array === savedMovies) {
      setIsSearchingSaved(true);
    }

    const checkbox = data.checkbox;
    const keyword = data.search.toLowerCase();

    const res = array.filter((el) => {
      const nameRU = el.nameRU.toLowerCase();
      const nameEN = el.nameEN.toLowerCase();

      return nameRU.includes(keyword) || nameEN.includes(keyword);
    });

    if (checkbox) {
      const shortMoviesResult = res.filter(
        (item) => item.duration <= SHORTMOVIETIME
      );
      setResult(setArray, shortMoviesResult);
    } else {
      setResult(setArray, res);
    }

    setTimeout(function stopPreloader() {
      setIsLoading(false);
    }, 2000);
  }

  function setResult(setState, array) {
    if (setState === setSearchResultArray) {
      setState(array);
      localStorage.setItem('searchResultArray', JSON.stringify(array));
    } else if (setState === setSearchResultSavedArray) {
      setState(array);
    }
  }

  function handleSearch(data, path) {
    if (path === '/movies') {
      getSearchResult(data, beatFilmsArray, setSearchResultArray);
    }
    if (path === '/saved-movies') {
      getSearchResult(data, savedMovies, setSearchResultSavedArray);
    }
  }

  // PERSIST ++++++++++++++++++++++++++++++++++++
  React.useEffect(() => {
    if (isLoggedIn) {
      const resultArray = JSON.parse(localStorage.getItem('searchResultArray'));
      if (resultArray) {
        setSearchResultArray(resultArray);
        setIsSearching(true);
      }
    }
  }, [isLoggedIn]);
  // PERSIST ++++++++++++++++++++++++++++++++++++

  const handleMovieLike = (movie) => {
    const like = savedMovies.some((i) => i.movieId === movie.id);

    if (!like) {
      api
        .saveMovie(movie)
        .then((newMovie) => {
          setSavedMovies([newMovie, ...savedMovies]);
          setSavedMovieIds([...savedMovieIds, newMovie.movieId]);
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      savedMovies.some((i) =>
        i.movieId === movie.id
          ? api
              .deleteMovie(i._id)

              .then((movie) => {
                if (movie.message === CARDDELETED) {
                  setSavedMovies((state) =>
                    state.filter((item) => item.movieId !== i.movieId)
                  );
                  setSavedMovieIds((state) =>
                    state.filter((id) => id !== i.movieId)
                  );
                }
              })
              .catch((err) => {
                console.log(err);
              })
          : ''
      );
    }
  };
  function handleMovieLikeDelete(movie) {
    api
      .deleteMovie(movie._id)
      .then((newMovie) => {
        if (newMovie.message === CARDDELETED) {
          setSavedMovies((state) =>
            state.filter((item) => item.movieId !== movie.movieId)
          );
          setSavedMovieIds((state) =>
            state.filter((id) => id !== movie.movieId)
          );
          setSearchResultSavedArray((state) =>
            state.filter((item) => item.movieId !== movie.movieId)
          );
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }

  function handleChangeProfile(data) {
    api
      .updateProfile(data)
      .then((res) => {
        if (res) {
          setCurrentUser({ name: res.name, email: res.email });

          setIsUpdateProfileError('Данные успешно сохранены');
          setTimeout(() => {
            setIsUpdateProfileError('');
          }, 5000);
        }
      })
      .catch((err) => {
        if (err === ERROR409) {
          setIsUpdateProfileError(DUBLICATEEMAIL);
        }
        console.log(err);
      });
  }

  function handleLogOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push('/');
    setCurrentUser({});
    setSavedMovies([]);
    setSavedMovieIds([]);
    setBeatFilmsArray([]);
    setSearchResultArray([]);
    setSearchResultSavedArray([]);
    setIsSearching(false);
    setIsLoading(false);
    setIsLoginError('');
    setIsRegisterError('');
    setIsUpdateProfileError('');
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
              getSearchMovies={handleSearch}
              searchResultArray={searchResultArray}
              isSearching={isSearching}
              onCardClick={handleMovieLike}
              savedMovieIds={savedMovieIds}
              savedMovies={savedMovies}
              isSearchError={isSearchError}
            />
            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              savedMovies={savedMovies}
              savedMovieIds={savedMovieIds}
              onDeleteClick={handleMovieLikeDelete}
              onCardClick={handleMovieLike}
              isLoading={isLoading}
              getSearchMovies={handleSearch}
              searchResultSavedArray={searchResultSavedArray}
              isSearchingSaved={isSearchingSaved}
              isSearchSavedError={isSearchSavedError}
            />
            <ProtectedRoute
              path="/profile"
              component={Profile}
              currentUser={currentUser}
              onChangeProfile={handleChangeProfile}
              onLogOut={handleLogOut}
              isUpdateProfileError={isUpdateProfileError}
            />

            {!isLoggedIn && (
              <Route path="/signup">
                <Register
                  onRegister={onRegister}
                  isRegisterError={isRegisterError}
                  isValidRegister={isValidRegister}
                />
              </Route>
            )}
            {!isLoggedIn && (
              <Route path="/signin">
                <Login onLogin={onLogin} isLoginError={isLoginError} />
              </Route>
            )}

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
