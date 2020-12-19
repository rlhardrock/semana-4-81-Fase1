const router = require('express').Router();
const RouterUsuario = require('./usuario.js');
const RouterArticulo = require('./articulo.js');
const RouterCategoria = require('./categoria.js');

router.use('/usuario', RouterUsuario);
router.use('/articulo', RouterArticulo);
router.use('/categoria', RouterCategoria);

module.exports = router;

/* const RouterUsuario = require('./api/usuario.js'); */