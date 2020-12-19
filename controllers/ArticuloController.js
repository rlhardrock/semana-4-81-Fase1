const models = require('../models')
const bcrypt = require('bcryptjs')

exports.add = async (req, res, next) => {
    try {
        const registro = await models.Articulo.create(req.body);
        res.status(200).json(registro);
                
    } catch (error) {
        res.status(500).send({
            message: 'GAME OVER'
        });
        next(error);
    } 
};

exports.query = async (req, res, next) => {
    try {
        const registro = await models.Articulo.findOne({ where: { id: req.query._id } });
        if (!registro) {
            res.status(404).send({
                message: 'El registro no existe'
            });
        } else {
            res.status(200).json(registro);
        }
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.list = async (req, res, next) => {
    try {
        const registro = await models.Articulo.findAll();
        if (registro) {
            res.status(200).json(registro);
        }else{
            res.status(404).send({
                message: 'GAME OVER'
            });
       }
    } catch (error) {
        res.status(500).send({
            message: 'GAME OVER'
        });
        next(error);
    }
};

exports.remove = async (req, res, next) => {
    try {
        const registro = await models.Articulo.destroy({
            where: {
                _id:
                    req.body._id
            }
        });
        res.status(200).json(registro);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.update = async (req, res, next) => {
    try {  
        const registro = await models.Articulo.update({nombre: req.body.nombre, codigo: req.body.codigo},
            { where: { 
                    id: req.body.id
                },
            });
            res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message: 'GAME OVER'
        });
        next(e);
    }
};

exports.activate = async (req, res, next) => {
    try {  
        const registro = await models.Articulo.update({estado: 1},
            { where: { 
                    id: req.body.id
                },
            });
            res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message: 'GAME OVER'
        });
        next(e);
    }
};

exports.deactivate = async (req, res, next) => {
    try {  
        const registro = await models.Articulo.update({estado: 0},
            { where: { 
                    id: req.body.id
                },
            });
            res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message: 'GAME OVER'
        });
        next(e);
    }
};
