import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './../styles/MiniPalette.styles';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = ({ classes, paletteName, user, colors, handleClick }) => {
  const deletePalette = e => {
    e.stopPropagation();
    // TODO: Call the reducer function to delete the palette
  };

  // TODO: Add Creator link as well
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ background: color.color }}
      key={color.name}
    />
  ));

  return (
    <div className={classes.root} onClick={handleClick}>
      {/* TODO: Use this button only when the user is authenticated and owns the palette */}
      <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />

      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{user.name}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
