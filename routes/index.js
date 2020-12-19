const router = require ('express').Router();

const routerUsuario = require('./usuario');
const routerArticulo = require('./articulo');
const routerCategoria = require('./categoria');

router.use('/articulo', routerArticulo);
router.use('/categoria', routerCategoria);
router.use('/usuario', routerUsuario);

module.exports = router;

/* const routerUsuario = require('./api/usuario.js'); */