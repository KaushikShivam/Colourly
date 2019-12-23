import React, { useState } from 'react';
import Slider from 'rc-slider';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({ level, changeLevel, handleChange }) => {
  const [format, setFormat] = useState('hex');

  const handleSelect = ({ target: { value } }) => {
    setFormat(value);
    handleChange(value);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">Colourly</a>
      </div>
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
      <div className="select-container">
        <Select value={format} onChange={handleSelect}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Navbar;
