import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({component: Component, auth, rest }) => (
  <Route
    {...rest}
    render={props => (
      auth === true 
        ? <Redirect to="/lk" />
        : <Component {...props} />
    )}
  />
);

export default privateRoute;