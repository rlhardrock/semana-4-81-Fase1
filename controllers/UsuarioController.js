const models = require('../models')
const bcrypt = require('bcryptjs')
const tokenServices = require('../services/token');

exports.add = async (req, res, next) => {
    try {
        const user = await models.Usuario.findOne({where: {email:req.body.email}});
        if (user){
            res.status(409).send({
                message: 'GAME OVER'
            })
        }else{
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const user = await models.Usuario.create(req.body);
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
        const reg = await models.Usuario.findOne({ where: { id: req.query._id } });
        if (!reg) {
            res.status(404).send({
                message: 'GAME OVER'
            });
        } else {
            res.status(200).json(reg);
        }
    } catch (e) {
        res.status(500).send({
            message: 'GAME OVER'
        });
        next(e);
    }
};

exports.list = async (req, res, next) => {
    try {
        const user = await models.Usuario.findAll();
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
        const reg = await models.Usuario.destroy({
            where: { _id:req.body._id  }
        });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'GAME OVER'
        });
        next(e);
    }
};

exports.update = async (req, res, next) => {
    try {  // 
        const user = await models.Usuario.findOne({ where: { email:req.body.email}});
        if(user){
            const user = await models.Usuario.update({nombre: req.body.nombre},
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
        console.log(req.body.id);
        const reg = await models.Usuario.update({ estado: 0 }, { where: { id: req.body.id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'GAME OVER'
        });
        next(e);
    }

};

exports.deactivate = async (req, res, next) => {
    try {
        const user = await models.Usuario.update({ estado: 1 }, { where: { id: req.body.id } });
        res.status(200).json(user);
    } catch (e) {
        res.status(500).send({
            message: 'GAME OVER'
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
                /* const token = services.token(user); */
                const token = await tokenServices.encode(user);/* jwt.sign({
                    id: user.id,
                    nombre: user.nombre,
                    email: user.email,
                    rol: user.rol,
                    estado: user.estado
                },'config.secret',{
                    expiresIn: 86400,
                }) */
                res.status(200).json({
                    auth: true,
                    user: user,
                    tokenReturn: token
                 });
                    /* send({
                    auth: true,
                    accessToken: token, */
                    /* user: user */
            }else{
                res.status(401).send({
                    auth: false, 
                    accessToken: null, 
                    reason: "GAME OVER"});
                /* json({ user, tokenReturn }) */
                /* error: 'Error 401 - Datos Incorrectos' }) */
            }
        }else{
            res.status(404).send('GAME OVER');
            /* json({error: 'Error 404 - Datos Incorrectos'}) */
        }
    }catch(error){
        res.status(500).send({
        message:'GAME OVER'
        }),
    next(error);
    }
};