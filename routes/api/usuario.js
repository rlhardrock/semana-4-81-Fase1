const router = require('express').Router();
const auth = require('../../middlewares/auth');
const usuarioController = require('../../controllers/UsuarioController.js');

router.post('/add',auth.verificarUsuario,usuarioController.add);
router.get('/query',auth.verificarUsuario,usuarioController.query);
router.get('/list',auth.verificarUsuario,usuarioController.list);
router.put('/update',auth.verificarUsuario,usuarioController.update);
router.delete('/remove',auth.verificarUsuario,usuarioController.remove);
router.put('/activate',auth.verificarUsuario,usuarioController.activate);
router.put('/deactivate',auth.verificarUsuario,usuarioController.deactivate);

/* router.post('/register',usuarioController.register); */
router.post('/login',auth.verificarUsuario,usuarioController.login);


module.exports = router;