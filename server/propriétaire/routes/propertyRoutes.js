const express = require('express');
const router = express.Router();
const { getAllProperties, createProperty, getPropertiesByOwnerId } = require('../controllers/propertyController');

router.get('/', getAllProperties);
router.post('/', createProperty);
router.get('/owner/:ownerId', getPropertiesByOwnerId); // Route pour obtenir les propriétés par propriétaire


module.exports = router;