import React from 'react';

import './../styles/Signup.css';
import Header from './Header';
import FormInput from './FormInput';

const Signup = () => {
  return (
    <>
      <Header />

      <main className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Create your account</h2>
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

export default Signup;
