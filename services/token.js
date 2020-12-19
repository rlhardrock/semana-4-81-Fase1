const jwt = require('jsonwebtoken');
const models = require('../models');

module.exports = {
    encode: async(user) => {
        const token = jwt.sign({
            id: user.id,
            nombre: user.nombre,
            email: user.email,
            rol: user.rol,
            estado: user.estado
        },'config.secret',{
            expiresIn: 86400,
        });
            return token;
    },
    decode: async(token) => {
        try {
            const{ id, email, rol } = await jwt.verify(token,'config.secret');
            const user = await models.Usuario.findOne({ where: {
                id: id,
                estado: 1,
            }})
            if (user){
                return user;
            }else{
                return false;
            }
        }catch (error) {
            const newToken = await checkToken(token);
            return newToken;
        }
    }
};

const checkToken = async (token) => {
    let localID =  null;
    try {
        const { id } = await jwt.decode(token);
            localID = id;
        } catch (error) {
            return false;
        }
        const user = await models.Usuario.findOne({ where: {
            id: id,
            estado: 1,
        }});
        if (user) {
            const token = encode(user);
            /* jwt.sign({ _id: __id }, 'config.secret', { expiresIn: '1d' }); */
            return { 
                token, 
                rol: user.rol };
        } else {
            return false;
    }
};