const express = require('express');
const router = express.Router();

const paletteController = require('./../controllers/paletteController');

router
  .route('/')
  .get(paletteController.getAllPalettes)
  .post(paletteController.createPalette);

router
  .route('/:id')
  .get(paletteController.getPalette)
  .patch(paletteController.updatePalette)
  .delete(paletteController.deletePalette);

module.exports = router;
