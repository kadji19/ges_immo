const express = require('express');
const router = express.Router();
const {createCandidate, getCandidatesByOwner} = require('../controllers/candidatController')

router.post('/add', createCandidate);
router.get('/owner/:ownerId/candidates', getCandidatesByOwner);

module.exports = router