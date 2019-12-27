import React from 'react';
import { Link } from 'react-router-dom';

import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes }) => {
  return (
    <div>
      <MiniPalette />
      {palettes.map(palette => (
        <MiniPalette {...palette} />
      ))}
    </div>
  );
};

export default PaletteList;
