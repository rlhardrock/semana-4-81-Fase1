const router = require('express').Router();
const auth = require('../../middlewares/auth');

const articuloController = require('../../controllers/ArticuloController.js');

router.post('/add', articuloController.add);
router.get('/query', articuloController.query);
router.get('/queryCodigo', articuloController.queryCodigo);
router.get('/list', articuloController.list);
router.put('/update',articuloController.update);
router.delete('/remove', articuloController.remove);
router.put('/activate',articuloController.activate);
router.put('/deactivate', articuloController.deactivate);

module.exports = router;

// Bien