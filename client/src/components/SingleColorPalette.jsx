import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

const SingleColorPalette = ({ palette, colorId }) => {
  const [format, setFormat] = useState('hex');

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  const changeFormat = val => setFormat(val);

  const shades = gatherShades(palette, colorId);

  const colorBoxes = shades.map(color => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color[format]}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default SingleColorPalette;
