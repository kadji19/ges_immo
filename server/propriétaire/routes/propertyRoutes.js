const express = require('express');
const router = express.Router();
const { getAllProperties, getAllPropertiesLimit, getAllTypeProperty, createProperty, getAllVilles, getPropertiesByOwnerId, getPropertyById } = require('../controllers/propertyController');

router.get('/get', getAllProperties);
router.get('/limit', getAllPropertiesLimit);
router.post('/add', createProperty);
router.get('/owner/:ownerId', getPropertiesByOwnerId); // Route pour obtenir les propriétés par propriétaire
router.get('/villes', getAllVilles);
router.get('/types', getAllTypeProperty);
router.get('/:id', getPropertyById); // Route pour obtenir une propriété par ID


module.exports = router;