const models = require('../models')
const bcrypt = require('bcryptjs')

exports.login = async (rep, res, next) => {
    try{
        const models = await models.Usuario.findOne();
    }catch(error){

    }
};

exports.add = async (req, res, next) => {
    try {
        const reg = await models.usuario.create(req.body);
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
        const reg = await models.usuario.findOne({ where: { id: req.query._id } });
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
        const reg = await models.usuario.findAll();
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
        const reg = await models.usuario.destroy({
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
        const reg = await models.usuario.update({
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
        const reg = await models.usuario.update({ estado: 1 }, { where: { id: req.body._id } });
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
        const reg = await models.usuario.update({ estado: 0 }, { where: { id: req.body._id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};