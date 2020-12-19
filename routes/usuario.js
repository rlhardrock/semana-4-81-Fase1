const router = require('express').Router();
const auth = require('../middlewares/auth');
const usuarioController = require('../controllers/UsuarioController.js');

router.post('/add',auth.verificarUsuario,usuarioController.add);

router.get('/list',auth.verificarUsuario,usuarioController.list);
router.put('/update',auth.verificarUsuario,usuarioController.update);

router.put('/activate',auth.verificarUsuario,usuarioController.activate);
router.put('/deactivate',auth.verificarUsuario,usuarioController.deactivate);

/* router.post('/register',usuarioController.register); */
router.post('/login',usuarioController.login);


module.exports = router;