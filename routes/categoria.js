const router = require('express').Router();
const auth = require('../middlewares/auth');
const categoriaController = require('../controllers/CategoriaController.js');

router.post('/add',auth.verificarAdministrador,categoriaController.add);

router.get('/list',categoriaController.list);
router.put('/update',auth.verificarAdministrador,categoriaController.update);

router.put('/activate',auth.verificarAdministrador,categoriaController.activate);
router.put('/deactivate',auth.verificarAdministrador,categoriaController.deactivate);

module.exports = router;

// Bien