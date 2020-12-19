//Middleware de autenticacion;
const tokenServices = require('../services/token');

module.exports = {
    verificarAdministrador: async(req, res, next) => {
            if (!req.headers.token) {
                return res.status(404).send({
                    message: 'Token perdido en acción'
                });
            }else{
                const response = await tokenServices.decode(req.headers.token);
                if (response.rol === 'Administrador') {
                    next();
                }else{
                    return res.status(403).send({
                    message: 'Usted no tiene Autorización o Permisos'
                });
            }
        }
    },
    verificarVendedor: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'Token perdido en acción'
            });
        }else{
            const response = await tokenServices.decode(req.headers.token);
            if (response.rol === 'Vendedor' || response.rol === 'Administrador') {
                next();
            }else{
                return res.status(403).send({
                message: 'Usted no tiene Autorización o Permisos'
            });
        }
    }
    }
}