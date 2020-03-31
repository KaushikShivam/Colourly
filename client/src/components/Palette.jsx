import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import styles from './../styles/Palette.styles';

import { fetchSinglePalette } from './../redux/actions/palette';
import { generatePalette } from './../helpers/colorHelpers';

const Palette = ({ match, classes, fetchSinglePalette, singlePalette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  useEffect(() => {
    fetchSinglePalette(match.params.id);
  }, [fetchSinglePalette, match.params.id]);

  const createColorBoxes = () => {
    if (singlePalette) {
      const palette = generatePalette(singlePalette);
      const colorBoxes = palette.colors[level].map(color => (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          moreUrl={`/palette/${palette.id}/${color.id}`}
          showingFullPalette
        />
      ));
      return colorBoxes;
    }
  };

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
      {singlePalette && (
        <>
          <div className={classes.PaletteColors}>{createColorBoxes()}</div>
          <PaletteFooter
            paletteName={singlePalette.paletteName}
            emoji={singlePalette.user.name}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  singlePalette: state.palette.singlePalette
});

const mapDispatchToProps = dispatch => ({
  fetchSinglePalette: id => dispatch(fetchSinglePalette(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Palette));
