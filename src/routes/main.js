/***Require express */
const express = require('express');
const router = express.Router();

/***Controller Require********** */

const mainController = require('../controllers/mainControllers');
const checkAdmin = require('./users');

router.get('/admin', checkAdmin, mainController.user)
router.get('/', mainController.index);

/**Module exports*** */

module.exports = router;
