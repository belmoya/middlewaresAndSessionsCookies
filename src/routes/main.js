/***Require express */
const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
/***Controller Require********** */

const mainController = require('../controllers/mainControllers');
const checkAdmin = require('./users');
const validator =  [
    body('name')
    .isEmpty()
    .normalizeEmail()
    .withMessage('Completar el campo'),
    body('correo')
    .isEmail()
    .withMessage('El email no es válido'),
    body('edad')
    .isInt()
    .withMessage('Ingresar un número'), 

];

router.get('/admin', checkAdmin, mainController.user)
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.post('/login', validator, mainController.processLogin);

/**Module exports*** */

module.exports = router;
