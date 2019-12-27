import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';

const App = () => {
  //TODO: use MongoDB here
  const findPalette = id => seedColors.find(palette => palette.id === id);

  return (
    <Switch>
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={routeProps => (
          <SingleColorPalette
            color
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={routeProps => (
          <PaletteList palettes={seedColors} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          //TODO: Move the generate palette in the palette detail
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
};

export default App;
