import React from 'react';

import './../styles/Signup.css';

const Signup = () => {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Create your account</h2>
        <form className="form form--signup">
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form__input"
              placeholder="John doe"
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form__group ma-bt-md">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form__input"
              placeholder="••••••••"
              minLength="8"
              required
            />
          </div>
          <div className="form__group ma-bt-md">
            <label htmlFor="passwordConfirm" className="form__label">
              Confirm Password
            </label>
            <input
              type="password"
              id="passwordConfirm"
              className="form__input"
              placeholder="••••••••"
              minLength="8"
              required
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;

//     .form__group.ma-bt-md
//       label.form__label(for='passwordConfirm') Confirm Password
//       input#passwordConfirm.form__input(type='password', placeholder='••••••••', required, minlength='8')
//     .form__group
//       button.btn.btn--green Sign Up
