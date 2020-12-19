const models = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const token = require('../services/token');

exports.add = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const reg = await models.Usuario.create(req.body);
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.query = async (req, res, next) => {
    try {
        const reg = await models.Usuario.findOne({ where: { id: req.query._id } });
        if (!reg) {
            res.status(404).send({
                message: 'El registro no existe'
            });
        } else {
            res.status(200).json(reg);
        }
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}

exports.list = async (req, res, next) => {
    try {
        const reg = await models.Usuario.findAll();
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.remove = async (req, res, next) => {
    try {
        const reg = await models.Usuario.destroy({
            where: {
                _id:
                    req.body._id
            }
        });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.update = async (req, res, next) => {
    try {
        const reg = await models.Usuario.update({
            nombre: req.body.nombre, descripcion:
                req.body.descripcion
        }, { where: { id: req.body._id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.activate = async (req, res, next) => {
    try {
        console.log(req.body._id);
        const reg = await models.Usuario.update({ estado: 1 }, { where: { id: req.body._id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }

};

exports.deactivate = async (req, res, next) => {
    try {
        const reg = await models.Usuario.update({ estado: 0 }, { where: { id: req.body._id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.login = async(req, res, next) =>{
    try{
        const user = await models.Usuario.findOne({where: {email:req.body.email}});
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                /* const token = await  */
                const token = jwt.sign({
                    id: user.id,
                    nombre: user.nombre,
                    email: user.email,
                    rol: user.rol,
                    estado: user.estado
                },'config.secret',{
                    expiresIn: 86400,
                });
                res.status(200).send({
                    auth: true,
                    accessToken: token,
                    user: user
                })
            }else{
                res.status(401).json({
                    error: 'Error 401 - Datos Incorrectos'
                })
            }
        }else{
            res.status(404).json({
                error: 'Error 404 - Datos Incorrectos'
            })
        }
    }catch(error){
        res.status(500).send({
        message:'Error 500 - Colapso de Recursos'
        }),
    next(error);
    }
};