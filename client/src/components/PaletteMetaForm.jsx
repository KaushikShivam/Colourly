import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css';

const PaletteMetaForm = ({ handleSubmit, hideForm }) => {
  const [open, setOpen] = React.useState(true);
  const [newPaletteName, setNewPaletteName] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      onClose={hideForm}
    >
      <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new beautiful palette. Try to be
            creative. :D
          </DialogContentText>
          <TextValidator
            value={newPaletteName}
            label="Palette Name"
            value={newPaletteName}
            onChange={e => setNewPaletteName(e.target.value)}
            validators={['required']}
            errorMessages={['Enter Palette Name']}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideForm} color="primary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
};

export default PaletteMetaForm;
