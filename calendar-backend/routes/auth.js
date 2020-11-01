/** 
 * Rutas de Usuarios / Auth
 * host + /api/auth 
**/

const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

// Crar usuario
router.post(
    '/new',
    [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    crearUsuario
);

// Login de usuario
router.post(
    '/',
    [ // middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),        
        validarCampos
    ],
    loginUsuario
);

// Renovar Token
router.get('/renew', validarJWT, revalidarToken);

module.exports = router;