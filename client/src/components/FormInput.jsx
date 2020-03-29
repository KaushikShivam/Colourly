import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './../styles/FormInput.styles';

const FormInput = ({ classes, title, ...otherProps }) => {
  return (
    <div>
      <label htmlFor={otherProps.id} className={classes.formLabel}>
        {title}
      </label>
      <input className={classes.formInput} {...otherProps} />
    </div>
  );
};

export default withStyles(styles)(FormInput);
