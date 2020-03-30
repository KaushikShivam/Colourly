const express = require('express');
const router = express.Router();

const paletteController = require('../controllers/paletteController');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(paletteController.getAllPalettes)
  .post(authController.protect, paletteController.createPalette);

router
  .route('/:id')
  .get(paletteController.getPalette)
  .patch(paletteController.updatePalette)
  .delete(paletteController.deletePalette);

module.exports = router;
