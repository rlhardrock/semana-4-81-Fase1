const router = require('express').Router();
const auth = require('../middlewares/auth');
const usuarioController = require('../controllers/UsuarioController.js');

router.post('/add',usuarioController.add);

router.get('/list',usuarioController.list);
router.put('/update',usuarioController.update);
router.put('/activate',usuarioController.activate);
router.put('/deactivate',usuarioController.deactivate);

router.post('/login',usuarioController.login);


module.exports = router;