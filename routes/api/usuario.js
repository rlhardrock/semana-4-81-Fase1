/* router.put('/deactivate', auth.verificarAdministrador, usuarioController.deactivate); */
const routerx = require('express-promise-router');
const router = require('express').Router();
const auth = require('../../middlewares/auth');

const routerx = require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const usuarioController = require('../../controllers/UsuarioController');
const router = routerx();

router.post('/add',usuarioController.add);
router.get('/query',usuarioController.query);
router.get('/list',usuarioController.list);
router.put('/update',usuarioController.update);
router.delete('/remove',usuarioController.remove);
router.put('/activate',usuarioController.activate);
router.put('/deactivate',usuarioController.deactivate);

router.post('/login', auth.verificarAdministrador)

module.exports = router;