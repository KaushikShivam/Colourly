import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

const Palette = ({ palette: { colors } }) => {
  const [level, setLevel] = useState(500);

  const colorBoxes = colors[level].map(color => (
    <ColorBox background={color.hex} name={color.name} />
  ));

  const changeLevel = level => setLevel(level);

  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer */}
    </div>
  );
};

export default Palette;
