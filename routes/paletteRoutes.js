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
  .patch(authController.protect, paletteController.updatePalette)
  .delete(authController.protect, paletteController.deletePalette);

module.exports = router;
