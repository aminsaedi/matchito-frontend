import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authService from '../services/authService';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!authService.getCureentUser())
          return (
            window.location ='/login'
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
