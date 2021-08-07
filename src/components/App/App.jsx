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
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import * as auth from '../../utils/auth';

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
              exact path="/movies"
              component={Movies}
              isLoggedIn={isLoggedIn}
            />
            <ProtectedRoute
              exact path="/saved-movies"
              component={SavedMovies}
              isLoggedIn={isLoggedIn}
            />
            <ProtectedRoute
              path="/profile"
              component={Profile}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
            />

            <Route path="/signup">
              <Register onRegister={onRegister} />
            </Route>
            <Route path="/signin">
              <Login onLogin={onLogin} />
            </Route>


            <Route path="*">
              <PageNotFound />
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
