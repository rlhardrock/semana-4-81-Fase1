# semana-3


BACKEND

Download Zip 
Open Project 
.gitignore

npm install   (si ya hay un package.json)

git init  
crear repositorio github


install dependencies

iniciar configuracion
npx sequelize-cli init (no forzar  si ya esta configurado de origen)

crear folder    controllers
crear file dentro del folder UserController.js


confirmar en package.json si  existe  >Debug   "scripts" : { "start-dev": "node index.js", "dev": "nodemon server.js" }

npm run dev


server.js  es el mismo index.js (start point)


Crear API para integrar con Frontend

configurar  unicamente development  en config / config.json

developmen:{ 
    username: DDBBuser   lo entrega la app
    password: DDBBpass
    database: DDBBname
    host: DDBBhost          remotemysql.com
    dialect:  mysql   posgres   mariadb
}

Created!
You have successfully created a new database. The details are below.


/* 
Username: lXdCDx4V5W

Database name: lXdCDx4V5W

Password: GsUPaoV67O

Server: remotemysql.com */




Username: yfhrKrs3LM

Database name: yfhrKrs3LM

Password: QlIMZPpNC7

Server: remotemysql.com

Port: 3306



usar model generate  para el modelo/clase --> user  y sus atributos
se esta usando npx   y  sin espacio entre los atributos  --name table   --attributes field: ....

npx sequelize-cli model:generate --name user --attributes name:string,password:string,email:string,profession:string,rol:string,vehiculo:string
 

Migracion DDBB

npx sequelize-cli db:migrate


registro de prueba   crear usuario a autenticar por seeders   opcional

npx sequelize-cli seed:generate --name seed-user

bcrypt generator crear una nueva contraseña y reemplazar la que esta por defecto

npx sequelize-cli db:seed:all

--> en seeders/migrations el nombre de la tabla esta pluralizado,  dejarlo en singular





/* const routerx = require('express-promise-router'); */
/* const router = routerx(); */







token.js  por defecto

async function checkToken(token) {
    let __id = null;
    try {
        const { id } = await jwt.decode(token);
        __id = id;
    } catch (e) {
        return false;
    }
    console.log(__id);
    const user = await models.Usuario.findOne({ where: { id: __id, estado: 1 } });
    if (user) {
        const token = jwt.sign({ id: __id }, 'secretKeyToGenerateToken', { expiresIn: '1d' });
        return { token, rol: user.rol };
    } else {
        return false;
    }
}

module.exports = {

    //generar el token
    encode: async(_id, rol) => {
        console.log(rol);
        const token = jwt.sign({ id: _id, rol: rol }, 'secretKeyToGenerateToken', { expiresIn: '1d' });
        return token;
    },
    //permite decodificar el token
    decode: async(token) => {
        try {
            const { id } = await jwt.verify(token, 'secretKeyToGenerateToken');
            const user = await models.Usuario.findOne({ where: { id: id } });
            if (user) {
                return user;
            } else {
                return false;
            }
        } catch (e) {
            const newToken = await checkToken(token);
            return newToken;
        }

    }
}