import React from 'react';
import { withStyles } from '@material-ui/styles';

import Header from './Header';
import FormInput from './FormInput';

import styles from './../styles/Form.styles';

const Signup = ({ classes }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.authContainer}>
          <h2 className={classes.formHeading}>Create your account</h2>
          <form className="form">
            <FormInput
              name="name"
              type="text"
              id="name"
              placeholder="John doe"
              title="Name"
              required
            />
            <FormInput
              name="email"
              type="email"
              id="email"
              placeholder="john@email.com"
              title="Email"
              required
            />
            <FormInput
              name="password"
              type="password"
              id="password"
              placeholder="••••••••"
              title="Password"
              minLength="8"
              required
            />
            <FormInput
              name="passwordConfirm"
              type="password"
              id="passwordConfirm"
              placeholder="••••••••"
              title="Confirm Password"
              minLength="8"
              required
            />
          </form>
        </div>
      </main>
    </>
  );
};

export default withStyles(styles)(Signup);
