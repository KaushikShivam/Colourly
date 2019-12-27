import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

const Palette = ({ palette: { colors, paletteName, emoji, id } }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const colorBoxes = colors[level].map(color => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${id}/${color.id}`}
      showLink={true}
    />
  ));

  const changeLevel = level => setLevel(level);

  const changeFormat = val => setFormat(val);

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {/* TODO: Add User Link Here */}
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
