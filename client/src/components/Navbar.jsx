import React, { useState } from 'react';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({ level, changeLevel, handleChange, showingAllColors }) => {
  const [format, setFormat] = useState('hex');
  const [open, setOpen] = useState(false);

  const handleSelect = ({ target: { value } }) => {
    setFormat(value);
    setOpen(true);
    handleChange(value);
  };

  const handleClose = () => setOpen(false);

  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">Colourly</Link>
      </div>
      {showingAllColors && (
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChange={changeLevel}
            />
          </div>
        </div>
      )}
      <div className="select-container">
        <Select value={format} onChange={handleSelect}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed: {format.toUpperCase()}</span>
        }
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        onClose={handleClose}
        action={[
          <IconButton
            color="inherit"
            onClick={handleClose}
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </header>
  );
};

export default Navbar;
