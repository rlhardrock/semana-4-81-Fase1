const router = require('express').Router();
const auth = require('../../middlewares/auth');

const usuarioController = require('../../controllers/UsuarioController.js');

router.post('/add',usuarioController.add);
router.get('/query',usuarioController.query);
router.get('/list',usuarioController.list);
router.put('/update',usuarioController.update);
router.delete('/remove',usuarioController.remove);
router.put('/activate',usuarioController.activate);
router.put('/deactivate',usuarioController.deactivate);

router.post('/register',usuarioController.register);
router.post('/login', auth.verificarAdministrador)


module.exports = router;