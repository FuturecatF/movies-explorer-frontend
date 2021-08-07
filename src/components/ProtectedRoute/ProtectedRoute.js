import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
   const token = localStorage.getItem('jwt');
  return (
    <Route>
      {() => (token ? <Component {...props} /> : <Redirect to="/signin" />)}
    </Route>
  );
};

export default ProtectedRoute;
