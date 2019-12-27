import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './../styles/PaletteFooter.styles';

const PaletteFooter = ({ paletteName, emoji, classes }) => {
  return (
    <footer className={classes.PaletteFooter}>
      {/* TODO: Add User Link Here */}
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
