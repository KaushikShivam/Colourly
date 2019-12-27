import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/Palette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';

const App = () => {
  //TODO: use MongoDB here
  const findPalette = id => seedColors.find(palette => palette.id === id);

  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          // Move the generate palette in the palette detail
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
};

export default App;
