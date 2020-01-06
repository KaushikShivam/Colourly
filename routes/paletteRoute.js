const express = require('express');

const paletteController = require('./../controllers/paletteController');

const router = express.Router();

router.route('/').post(paletteController.createPalette);

module.exports = router;
