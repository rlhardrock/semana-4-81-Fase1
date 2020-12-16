/* router.put('/deactivate', auth.verificarVendedor, categoriaController.deactivate); */
const routerx = require('express-promise-router');
const router = require('express').Router();
const auth = require('../../middlewares/auth');

const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController');
const categoriaController = require('../../controllers/CategoriaController');
const router = routerx();

router.post('/add',categoriaController.add);
router.get('/query',categoriaController.query);
router.get('/list',categoriaController.list);
router.put('/update',categoriaController.update);
router.delete('/remove',categoriaController.remove);
router.put('/activate',categoriaController.activate);
router.put('/deactivate',categoriaController.deactivate);

module.exports = router;