const express = require('express');
const router = express.Router();
const jogoController = require('../controllers/jogoController');

router.post('/resolver/:jogoId', jogoController.resolverJogo);

module.exports = router;
