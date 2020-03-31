import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'react-snackbar-alert';

import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';
import Alert from './components/Alert';

import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './routing/PrivateRoute';

import { loadUser } from './redux/actions/auth';

import setAuthToken from './utils/setAuthToken';

if (localStorage.jwt) {
  setAuthToken(localStorage.jwt);
}

const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  // TODO: Don't need this state for now. This will be fetched from the rc-slider-dot-reverse
  // const [palettes, addPalettes] = useState(seedColors);

  //TODO: use MongoDB here
  // const findPalette = id => palettes.find(palette => palette.id === id);

  // TODO: Use this to save it to DB instead. And move this back to newPalette form
  // const savePalette = newPalette => {
  //   console.log(newPalette);
  //   // addPalettes([...palettes, newPalette])
  // };

  return (
    <SnackbarProvider>
      <Alert />
      <Switch>
        <PrivateRoute
          exact
          path="/palette/new"
          // TODO: Add component instead of render for PrivateRoute.
          component={NewPaletteForm}
        />
        <PrivateRoute
          exact
          path="/me"
          // TODO: Add component instead of render for PrivateRoute.
          component={PaletteList}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              paletteId={routeProps.match.params.paletteId}
            />
          )}
        />
        <Route exact path="/" component={PaletteList} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => <Palette {...routeProps} />}
        />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </SnackbarProvider>
  );
};

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadUser())
});

export default connect(null, mapDispatchToProps)(App);
