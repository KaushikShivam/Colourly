import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';

const styles = {
  root: {
    backgroundColor: 'blue'
  }
};

const PaletteList = ({ palettes, classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {/* TODO: Refactor and make this a global NAV */}
        <nav className={classes.nav}>
          <h1>Colourly</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette {...palette} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
