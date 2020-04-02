import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './../styles/MiniPalette.styles';
import DeleteIcon from '@material-ui/icons/Delete';

import { deletePalette } from './../redux/actions/palette';

const MiniPalette = ({
  classes,
  id,
  paletteName,
  user,
  colors,
  handleClick,
  handleUserClick,
  auth,
  deletePalette
}) => {
  const handleDelete = e => {
    e.stopPropagation();
    deletePalette(id);
  };

  const handleUser = e => {
    e.stopPropagation();
    handleUserClick(user.id);
  };

  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ background: color.color }}
      key={color.name}
    />
  ));

  const isPaletteOwner = () =>
    auth.isAuthenticated && auth.user && user.id === auth.user.id;

  return (
    <div className={classes.root} onClick={handleClick}>
      {isPaletteOwner() && (
        <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
      )}

      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>{paletteName}</h5>
      <span onClick={handleUser}>{user.name}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  deletePalette: id => dispatch(deletePalette(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MiniPalette));
