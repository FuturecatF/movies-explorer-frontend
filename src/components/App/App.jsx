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
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router';

function App() {
  const location = useLocation();

  const headerLocation = ['/profile', '/', '/movies', '/saved-movies']
  const footerLocation = ['/', '/movies', '/saved-movies']

  const shouldShowHeader = headerLocation.some((item) => location.pathname === item);
  const shouldShowFooter = footerLocation.some((item) => location.pathname === item);

  const [isMobileMenuOpen, SetIsMobileMenuOpen] = React.useState(false);
  function openMobileMenu() {
    SetIsMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    SetIsMobileMenuOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        {shouldShowHeader && <Header openMobileMenu={openMobileMenu} />}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
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
      </div>
    </div>
  );
}

export default App;
