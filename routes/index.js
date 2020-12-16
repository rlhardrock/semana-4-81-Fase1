const routerx = require('express-promise-router');
const router = routerx();

const categoriaRouter = require('./api/articulo');
const categoriaRouter = require('./articulo');
router.use('/articulo', articuloRouter);

const categoriaRouter = require('./api/usuario');
const categoriaRouter = require('./usuario');
router.use('/usuario', usuarioRouter);

const categoriaRouter = require('./api/categoria');
const categoriaRouter = require('./categoria');
router.use('/categoria', categoriaRouter);

module.exports = router;