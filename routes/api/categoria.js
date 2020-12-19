const router = require('express').Router();
const auth = require('../../middlewares/auth');

const categoriaController = require('../../controllers/CategoriaController.js');

router.post('/add',auth.verificarUsuario,categoriaController.add);
router.get('/query',auth.verificarUsuario,categoriaController.query);
router.get('/list',auth.verificarUsuario,categoriaController.list);
router.put('/update',auth.verificarUsuario,categoriaController.update);
router.delete('/remove',auth.verificarUsuario,categoriaController.remove);
router.put('/activate',auth.verificarUsuario,categoriaController.activate);
router.put('/deactivate',auth.verificarUsuario,categoriaController.deactivate);

module.exports = router;

// Bien