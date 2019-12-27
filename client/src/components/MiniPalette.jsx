import React from 'react';

import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple'
  }
};

const MiniPalette = ({ classes }) => {
  return <div className={classes.main}>Mini Palette</div>;
};

export default withStyles(styles)(MiniPalette);
