import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';
import styles from './../styles/PaletteList.styles';

import Header from './Header';

const PaletteList = ({ palettes, classes, history }) => {
  const goToPalette = slug => history.push(`/palette/${slug}`);

  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette
                key={palette.id}
                {...palette}
                handleClick={() => goToPalette(palette.slug)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  palettes: state.palette.palettes
});

export default connect(mapStateToProps)(withStyles(styles)(PaletteList));
