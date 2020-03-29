import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';

import Header from './Header';
import FormInput from './FormInput';
import CustomButton from './CustomButton';

import styles from './../styles/Form.styles';

const Signup = ({ classes }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const { name, email, password, passwordConfirm } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.authContainer}>
          <h2 className={classes.formHeading}>Create your account</h2>
          <form className="form" onSubmit={handleSubmit}>
            <FormInput
              name="name"
              type="text"
              id="name"
              placeholder="John doe"
              title="Name"
              value={name}
              onChange={handleChange}
              required
            />
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
            <FormInput
              name="passwordConfirm"
              type="password"
              id="passwordConfirm"
              placeholder="••••••••"
              title="Confirm Password"
              minLength="8"
              value={passwordConfirm}
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

export default withStyles(styles)(Signup);
