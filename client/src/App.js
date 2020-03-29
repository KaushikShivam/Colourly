import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';

import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  // TODO: Don't need this state for now. This will be fetched from the rc-slider-dot-reverse
  const [palettes, addPalettes] = useState(seedColors);

  //TODO: use MongoDB here
  const findPalette = id => palettes.find(palette => palette.id === id);

  // TODO: Use this to save it to DB instead. And move this back to newPalette form
  const savePalette = newPalette => addPalettes([...palettes, newPalette]);

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={routeProps => (
          <NewPaletteForm savePalette={savePalette} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={routeProps => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={routeProps => (
          <PaletteList palettes={palettes} {...routeProps} />
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
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default App;
