const router = require('express').Router()
const usuarioController = require('../../controllers/UsuarioController')
const auth = require('../../middlewares/auth')

router.get('/list', auth.verificarAdministrador, usuarioController.list);
router.post('/add', auth.verificarAdministrador, usuarioController.add);
router.put('/update', auth.verificarAdministrador, usuarioController.update);
router.put('/activate', auth.verificarAdministrador, usuarioController.activate);
router.put('/deactivate', auth.verificarAdministrador, usuarioController.deactivate);

module.exports = router;

