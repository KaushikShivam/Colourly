import React from 'react';
import { withStyles } from '@material-ui/styles';

import { Link } from 'react-router-dom';

import styles from './../styles/Header.styles';

const Header = ({ classes }) => (
  <nav className={classes.Header}>
    <div className={classes.logo}>
      <Link to="/">Colourly</Link>
    </div>
    <div className={classes.links}>
      <Link to="/signup">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>
);

export default withStyles(styles)(Header);
