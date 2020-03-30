import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import styles from './../styles/Palette.styles';

import { fetchSinglePalette } from './../redux/actions/palette';
import { generatePalette } from './../helpers/colorHelpers';

const SingleColorPalette = ({
  paletteId,
  singlePalette,
  fetchSinglePalette,
  colorId,
  classes
}) => {
  const [format, setFormat] = useState('hex');

  useEffect(() => {
    fetchSinglePalette(paletteId);
  }, []);

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

  const createColorBoxes = () => {
    if (singlePalette) {
      const palette = generatePalette(singlePalette);
      const shades = gatherShades(palette, colorId);

      return shades.map(color => (
        <ColorBox
          key={color.name}
          name={color.name}
          background={color[format]}
          showLink={false}
        />
      ));
    }
  };
  return (
    <div className={classes.Palette}>
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      {singlePalette && (
        <>
          <div className={classes.PaletteColors}>
            {createColorBoxes()}
            <div className={classes.goBack}>
              <Link to={`/palette/${singlePalette.id}`}>Go Back</Link>
            </div>
          </div>
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
)(withStyles(styles)(SingleColorPalette));
