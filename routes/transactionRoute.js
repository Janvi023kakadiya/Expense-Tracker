const express = require('express');
const route = express.Router();
const controller = require('../controllers/routeController');
const multer = require('multer'); // Require multer
const upload = multer({ dest: 'uploads/' }); // Configure multer 

// Default Page Route
route.get('/', controller.default);

// Add Transaction Page Route
route.get('/add', controller.add);

// Edit Transaction Page Route
route.get('/edit/:id', controller.edit);

// Delete Transaction Route
route.get('/delete/:id', controller.delete); 

// Add Transaction Route (with image upload)
route.post('/addTransaction', upload.single('logo'), controller.addTransaction);

// Update Transaction Route (with image upload) 
route.post('/editTransaction/:id', upload.single('logo'), controller.editTransaction);

module.exports = route;
