/** 
 * Rutas de Eventos / Events
 * host + /api/events 
**/

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { eliminarEvento, getEventos, crearEvento, actualizarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

// Todas tienen que pasar por la validación del JWT
router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear un nuevo evento
router.post(
    '/',
    [ // middlewares
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de fin es obligatoria').custom(isDate),
        validarCampos
    ], 
    crearEvento
);

// Actualizar evento
router.put(
    '/:id',
    [ // middlewares        
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos        
    ],
    actualizarEvento
);

// Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;