const express = require('express');
const paletteController = require('./../controllers/paletteController');
const router = express.Router();

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
