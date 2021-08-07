import React from "react";
import {  Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.isLoggedIn && <Component {...props} />
      }
    </Route>
  );
};

export default ProtectedRoute;