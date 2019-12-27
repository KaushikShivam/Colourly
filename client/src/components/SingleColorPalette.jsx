import React from 'react';

const SingleColorPalette = ({ palette, colorId }) => {
  const gatherShades = (palette, colorToFilterBy) => {
    const shades = [];
    const allColors = palette.colors;

    for (const key in allColors) {
      shades.push(allColors[key].filter(color => color.id === colorToFilterBy));
    }

    return shades.slice(1);
  };

  const shades = gatherShades(palette, colorId);

  return (
    <div>
      <h1>Single Color Paleyye</h1>
    </div>
  );
};

export default SingleColorPalette;
