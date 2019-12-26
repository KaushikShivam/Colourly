const express = require('express');
const paletteController = require('./../controllers/paletteController');
const authController = require('./../controllers/authController');
const router = express.Router();

router
  .route('/')
  .get(paletteController.getAllPalettes)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    paletteController.createPalette
  );

router
  .route('/:id')
  .get(paletteController.getPalette)
  .patch(
    authController.protect,
    authController.restrictTo('user'),
    paletteController.updatePalette
  )
  .delete(
    authController.protect,
    authController.restrictTo('user'),
    paletteController.deletePalette
  );

module.exports = router;
