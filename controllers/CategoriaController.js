const models = require('../models')
const bcrypt = require('bcryptjs')


exports.add = async (req, res, next) => {
    try {
        const user = await models.Categoria.findOne({where: {descripcion:req.body.descripcion}});
        if (user){
            res.status(409).send({
                message: 'GAME OVER'
            })
        }else{
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const user = await models.Categoria.create(req.body);
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send({
            message: 'GAME OVER'
        });
        next(error);
    }
};


exports.query = async (req, res, next) => {
    try {
        const reg = await models.Categoria.findOne({ where: { id: req.query._id } });
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
        const user = await models.Categoria.findAll();
        if (user) {
            res.status(200).json(user);
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
        const reg = await models.Categoria.destroy({
            where: { _id: req.body._id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.update = async (req, res, next) => {
    try {  // 
        const user = await models.Categoria.findOne({ where: { id:req.body.id}});
        if(user){
            const user = await models.Categoria.update({nombre: req.body.nombre},
                { where: { 
                    email: req.body.email
                },
            });
            res.status(200).json(user);
        }else{
            res.status(404).send({
                    message: 'GAME OVER'
            });
        }
    } catch (e) {
        res.status(500).send({
            message: 'GAME OVER'
        });
        next(e);
    }
};

exports.activate = async (req, res, next) => {
    try {
        console.log(req.body._id);
        const reg = await models.Categoria.update({ estado: 1 }, { where: { id: req.body._id } });
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
        const reg = await models.Categoria.update({ estado: 0 }, { where: { id: req.body._id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};