const articuloRouter = require('./api/articulo');
router.use('/articulo', articuloRouter);

const usuarioRouter = require('./api/usuario');
router.use('/usuario', usuarioRouter);

const categoriaRouter = require('./api/categoria');
router.use('/categoria', categoriaRouter);

module.exports = router;