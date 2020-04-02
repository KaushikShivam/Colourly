import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import styles from './../styles/PaletteFooter.styles';

const PaletteFooter = ({ paletteName, user, classes }) => {
  return (
    <footer className={classes.PaletteFooter}>
      <p>{paletteName}</p>
      <span className={classes.user}>
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      </span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
