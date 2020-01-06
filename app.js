const express = require('express');

// Get all routes
const paletteRouter = require('./routes/paletteRoute');

const app = express();

// body parser
app.use(express.json());

// Mount all routers
app.use('/api/v1/palettes', paletteRouter);

module.exports = app;
