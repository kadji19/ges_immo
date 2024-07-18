const express = require('express');
const router = express.Router();
const { getAllProperties, getAllTypeProperty, createProperty, getAllVilles, getPropertiesByOwnerId } = require('../controllers/propertyController');

router.get('/get', getAllProperties);
router.post('/add', createProperty);
router.get('/owner/:ownerId', getPropertiesByOwnerId); // Route pour obtenir les propriétés par propriétaire
router.get('/villes', getAllVilles);
router.get('/types', getAllTypeProperty);


module.exports = router;