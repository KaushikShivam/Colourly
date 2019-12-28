import React, { useEffect, useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import PaletteFormNav from './PaletteFormNav';

import { ChromePicker } from 'react-color';

const ColorPickerForm = ({ paletteFull, addNewColor, colors }) => {
  const [currentColor, setColor] = useState('teal');
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
    <Fragment>
      <ChromePicker color={currentColor} onChange={updateCurrentColor} />

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
        />
        <Button
          variant="contained"
          color="primary"
          name="newPaletteName"
          style={{ backgroundColor: paletteFull ? 'grey' : currentColor }}
          type="submit"
          disabled={paletteFull}
        >
          {paletteFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </Fragment>
  );
};

export default ColorPickerForm;
