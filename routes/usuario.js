const router = require('express').Router();
const auth = require('../middlewares/auth');
const usuarioController = require('../controllers/UsuarioController.js');

router.post('/add',auth.verificarVendedor,usuarioController.add);

router.get('/list',usuarioController.list);
router.put('/update',auth.verificarAdministrador,usuarioController.update);
router.put('/activate',auth.verificarAdministrador,usuarioController.activate);
router.put('/deactivate',auth.verificarAdministrador,usuarioController.deactivate);

router.post('/login',usuarioController.login);


module.exports = router;