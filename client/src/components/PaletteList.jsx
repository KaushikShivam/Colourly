import React from 'react';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';
import styles from './../styles/PaletteList.styles';

const PaletteList = ({ palettes, classes, history }) => {
  const goToPalette = id => history.push(`/palette/${id}`);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {/* TODO: Refactor and make this a global NAV, Take out the nav styles as well */}
        <nav className={classes.nav}>
          <h1>Colourly</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              {...palette}
              handleClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
