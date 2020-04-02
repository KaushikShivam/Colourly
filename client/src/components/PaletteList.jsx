import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';
import styles from './../styles/PaletteList.styles';
import {
  fetchPalettes,
  fetchMyPalettes,
  fetchUserPalettes
} from './../redux/actions/palette';

import Header from './Header';

const PaletteList = ({
  fetchPalettes,
  fetchMyPalettes,
  fetchUserPalettes,
  palettes,
  classes,
  history,
  match,
  location: { pathname }
}) => {
  const goToPalette = id => history.push(`/palette/${id}`);
  const goToUser = id => history.push(`/user/${id}`);

  useEffect(() => {
    if (pathname === '/me') {
      fetchMyPalettes();
    } else if (pathname.includes('/user')) {
      fetchUserPalettes(match.params.userId);
    } else {
      fetchPalettes();
    }
  }, [
    fetchMyPalettes,
    fetchPalettes,
    fetchUserPalettes,
    match.params.userId,
    pathname
  ]);

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        {pathname.includes('/user') && palettes.length > 0 && (
          <h2
            className={classes.header}
          >{`${palettes[0].user.name}'s Palettes`}</h2>
        )}

        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              key={palette.id}
              {...palette}
              handleClick={() => goToPalette(palette.id)}
              handleUserClick={goToUser}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  palettes: state.palette.palettes
});

const mapDispatchToProps = dispatch => ({
  fetchPalettes: () => dispatch(fetchPalettes()),
  fetchUserPalettes: id => dispatch(fetchUserPalettes(id)),
  fetchMyPalettes: () => dispatch(fetchMyPalettes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(PaletteList)));
