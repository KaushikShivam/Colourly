import React, { useState } from 'react';
import Slider from 'rc-slider';
import { withStyles } from '@material-ui/styles';

import { Link } from 'react-router-dom';

import 'rc-slider/assets/index.css';
import styles from './../styles/Navbar.styles';

const Navbar = ({ classes }) => (
  <nav className={classes.Navbar}>
    <div className={classes.logo}>
      <Link to="/">Colourly</Link>
    </div>
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
);

export default withStyles(styles)(Navbar);
