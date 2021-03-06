import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/styles';

import styles from './../styles/ColorPickerForm.styles';

const ColorPickerForm = ({ paletteFull, addNewColor, colors, classes }) => {
  const [currentColor, setColor] = useState('#104573');
  const [newName, setNewName] = useState('');

  const updateCurrentColor = newColor => {
    setColor(newColor.hex);
  };

  const handleChange = e => setNewName(e.target.value);

  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newName
    };
    addNewColor(newColor);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      return colors.every(
        color => color.name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule('isColorUnique', value => {
      return colors.every(color => color.color !== currentColor);
    });
  }, [colors, currentColor]);

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChange={updateCurrentColor}
        width="100%"
        className={classes.picker}
      />

      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          value={newName}
          onChange={handleChange}
          validators={['required', 'isColorUnique', 'isColorNameUnique']}
          errorMessages={[
            'Provide a valid name',
            'Color already used',
            'Color name should be unique'
          ]}
          className={classes.colorNameInput}
          variant="filled"
          margin="normal"
          placeholder="Color Name"
        />
        <Button
          variant="contained"
          color="primary"
          name="newPaletteName"
          style={{ backgroundColor: paletteFull ? 'grey' : currentColor }}
          type="submit"
          disabled={paletteFull}
          className={classes.addColor}
        >
          {paletteFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default withStyles(styles)(ColorPickerForm);
