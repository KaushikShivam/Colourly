import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './../styles/CustomButton.styles';

const CustomButton = ({ text, classes }) => {
  return <button className={classes.btn}>{text}</button>;
};

export default withStyles(styles)(CustomButton);
