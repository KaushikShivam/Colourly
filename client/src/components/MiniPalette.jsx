import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './../styles/MiniPalette.styles';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = ({
  classes,
  paletteName,
  user,
  colors,
  handleClick,
  handleUserClick,
  auth
}) => {
  const deletePalette = e => {
    e.stopPropagation();
    // TODO: Call the reducer function to delete the palette
  };

  const handleUser = e => {
    e.stopPropagation();
    handleUserClick(user.id);
  };

  // TODO: Add Creator link as well
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ background: color.color }}
      key={color.name}
    />
  ));

  const isPaletteOwner = () => auth.isAuthenticated && user.id === auth.user.id;

  return (
    <div className={classes.root} onClick={handleClick}>
      {isPaletteOwner() && (
        <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
      )}

      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span onClick={handleUser}>{user.name}</span>
      </h5>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withStyles(styles)(MiniPalette));
