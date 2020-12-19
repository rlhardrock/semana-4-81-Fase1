const models = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const token = require('../services/token');

exports.add = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const reg = await models.Articulo.create(req.body);
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
        const reg = await models.Articulo.findOne({ where: { id: req.query._id } });
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
};

exports.list = async (req, res, next) => {
    try {
        const reg = await models.Articulo.findAll();
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
};

exports.remove = async (req, res, next) => {
    try {
        const reg = await models.Articulo.destroy({
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
        const reg = await models.Articulo.update({
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
        const reg = await models.Articulo.update({ estado: 1 }, { where: { id: req.body._id } });
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
        const reg = await models.Articulo.update({ estado: 0 }, { where: { id: req.body._id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};