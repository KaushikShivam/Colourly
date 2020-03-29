import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import FormInput from './FormInput';
import CustomButton from './CustomButton';

import styles from './../styles/Form.styles';

import { loginUser } from './../redux/actions/auth';

const Login = ({ classes, loginUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    loginUser(formData);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.authContainer}>
          <h2 className={classes.formHeading}>login with Email</h2>
          <form className="form" onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              id="email"
              placeholder="john@email.com"
              title="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              id="password"
              placeholder="••••••••"
              title="Password"
              minLength="8"
              value={password}
              onChange={handleChange}
              required
            />
            <CustomButton text="Create" />
          </form>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  loginUser: body => dispatch(loginUser(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
