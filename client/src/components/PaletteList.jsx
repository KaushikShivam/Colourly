import React from 'react';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';
import styles from './../styles/PaletteList.styles';

import Header from './Header';

const PaletteList = ({ palettes, classes, history }) => {
  const goToPalette = id => history.push(`/palette/${id}`);

  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.container}>
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
    </>
  );
};

export default withStyles(styles)(PaletteList);
