import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...otherProps
}) => (
  <Route
    {...otherProps}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to="/login" />
      ) : (
        <Component {...otherProps} />
      )
    }
  />
);

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(PrivateRoute);
