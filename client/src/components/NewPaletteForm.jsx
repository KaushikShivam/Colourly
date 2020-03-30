import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { arrayMove } from 'react-sortable-hoc';
import randomColor from 'randomcolor';

import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

import useStyles from './../styles/newPaletteForm.styles';

const NewPaletteForm = ({ savePalette, history, maxColors }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [colors, setNewColor] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = newColor => {
    setNewColor(oldColors => [...oldColors, newColor]);
  };

  const handleSavePalette = paletteName => {
    // 1. Create palette
    // 2. Save to database
    // 3. Pass cb
    // 4. once successfull, history.push

    const newPalette = { paletteName, colors };

    // const newPalette = {
    //   colors: colors,
    //   paletteName: newPaletteName,
    //   id: newPaletteName.toLowerCase().replace(/ /g, '-')
    // };
    // TODO: Remove ID from here. MongoDB Will create it itself
    // newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    // newPalette.colors = colors;
    console.log(paletteName);
    // savePalette(newPalette);
    // TODO: Do this push only when you recieve success message from server
    // history.push('/');
  };

  const removeColor = colorName => {
    setNewColor(colors.filter(color => color.name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setNewColor(arrayMove(colors, oldIndex, newIndex));
  };

  const clearColors = () => setNewColor([]);

  const addRandomColor = () => {
    const newColor = {
      name: randomColor().replace(/#/g, ''),
      color: randomColor()
    };
    setNewColor(oldColors => [...oldColors, newColor]);
  };

  const paletteFull = colors.length >= maxColors;

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        handleSubmit={handleSavePalette}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.btns}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={paletteFull}
              className={classes.button}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteFull={paletteFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
};

NewPaletteForm.defaultProps = {
  maxColors: 20
};

export default NewPaletteForm;
