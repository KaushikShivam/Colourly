import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/Palette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
      <Route
        exact
        path="palettes/:id"
        render={() => <h1>Individual palette goes here</h1>}
      />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
