import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import PaletteMetaForm from './PaletteMetaForm';
import useStyles from './../styles/PaletteFormNav.styles';

const PaletteFormNav = ({ open, handleSubmit, handleDrawerOpen }) => {
  const classes = useStyles();
  const [formShowing, toggleFormShowing] = useState(false);

  const showForm = () => toggleFormShowing(true);
  const hideForm = () => toggleFormShowing(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/" className={classes.link}>
            <Button
              className={(classes.button, classes.buttonCancel)}
              variant="contained"
            >
              Cancel
            </Button>
          </Link>
          <Button
            className={classes.button}
            variant="contained"
            onClick={showForm}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm handleSubmit={handleSubmit} hideForm={hideForm} />
      )}
    </div>
  );
};

export default PaletteFormNav;
