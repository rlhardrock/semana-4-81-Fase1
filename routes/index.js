const router = require('express').Router();

const apiRouterUsuario = require('./api/usuario.js');
router.use('/auth', apiRouterUsuario);

const apiRouterArticulo = require('./api/articulo.js');
router.use('/auth', apiRouterArticulo);

const apiRouterCategoria = require('./api/categoria.js');
router.use('/auth', apiRouterCategoria);

module.exports = router;