const router = require('express').Router();
const auth = require('../../middlewares/auth');
const articuloController = require('../../controllers/ArticuloController.js');

router.post('/add',auth.verificarUsuario, articuloController.add);
router.get('/query',auth.verificarUsuario, articuloController.query);
router.get('/list',auth.verificarUsuario,articuloController.list);
router.put('/update',auth.verificarUsuario,articuloController.update);
router.delete('/remove',auth.verificarUsuario,articuloController.remove);
router.put('/activate',auth.verificarUsuario,articuloController.activate);
router.put('/deactivate',auth.verificarUsuario,articuloController.deactivate);

module.exports = router;

// Bien