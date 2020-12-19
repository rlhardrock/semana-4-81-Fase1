const router = require('express').Router();
const auth = require('../middlewares/auth');
const categoriaController = require('../controllers/CategoriaController.js');

router.post('/add',categoriaController.add);

router.get('/list',categoriaController.list);
router.put('/update',categoriaController.update);
router.put('/activate',categoriaController.activate);
router.put('/deactivate',categoriaController.deactivate);

module.exports = router;

// Bien