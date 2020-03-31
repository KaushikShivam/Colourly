import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';
import styles from './../styles/PaletteList.styles';
import { fetchPalettes, fetchMyPalettes } from './../redux/actions/palette';

import Header from './Header';

const PaletteList = ({
  fetchPalettes,
  fetchMyPalettes,
  palettes,
  classes,
  history,
  location: { pathname }
}) => {
  const goToPalette = id => history.push(`/palette/${id}`);

  useEffect(() => {
    if (pathname === '/me') {
      fetchMyPalettes();
    } else {
      fetchPalettes();
    }
  }, []);

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
                handleClick={() => goToPalette(palette.id)}
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

const mapDispatchToProps = dispatch => ({
  fetchPalettes: () => dispatch(fetchPalettes()),
  fetchMyPalettes: () => dispatch(fetchMyPalettes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(PaletteList)));
