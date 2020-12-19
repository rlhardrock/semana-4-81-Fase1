const router = require('express').Router();
const auth = require('../middlewares/auth');
const articuloController = require('../controllers/ArticuloController.js');

router.post('/add',auth.verificarAdministrador,articuloController.add);

router.get('/list',articuloController.list);
router.put('/update',auth.verificarAdministrador,articuloController.update);

router.put('/activate',auth.verificarAdministrador,articuloController.activate);
router.put('/deactivate',auth.verificarAdministrador,articuloController.deactivate);

module.exports = router;

// Bien