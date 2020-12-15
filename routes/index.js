const categoriaRouter = require('./api/articulo');
const categoriaRouter = require('./api/categoria');
const categoriaRouter = require('./api/usuario');



const router = routerx();

router.use('/articulo', articuloRouter);
router.use('/categoria', categoriaRouter);
router.use('/usuario', usuarioRouter);

module.exports = router;