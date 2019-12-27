import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  PaletteColors: {
    height: '90%'
  }
};

const Palette = ({ palette: { colors, paletteName, emoji, id }, classes }) => {
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
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors
      />
      <div className={classes.PaletteColors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withStyles(styles)(Palette);
