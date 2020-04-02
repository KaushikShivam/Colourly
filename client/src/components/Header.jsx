import React from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import styles from './../styles/Header.styles';

import { logout } from './../redux/actions/auth';

import logo from './../assets/logo.png';

const Header = ({
  classes,
  auth: { isAuthenticated, loading, user },
  logout
}) => {
  const guestLinks = (
    <>
      <Link to="/signup">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/palette/new">Create</Link>
    </>
  );

  const authLinks = (
    <>
      {/* <Link to="/palette/new">Create</Link> */}
      <Link to="/me">{user && user.name.split(' ')[0]}</Link>
      <a onClick={logout} href="#!">
        Logout
      </a>
    </>
  );

  return (
    <nav className={classes.Header}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={logo} alt="Company logo" />
          <span className={classes.logoTitle}>Colourly</span>
        </Link>
      </div>
      <div className={classes.links}>
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
