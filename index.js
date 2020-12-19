const express = require('express'); //
const morgan = require('morgan'); //***
const cors = require('cors'); //
const router = require('./routes/index');   //('./routes/index.js');
const path = require('path');
const bodyParser = require('body-parser'); //
const app = express();
const db = require('./models');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('dev'));  //
app.use(cors());  //
app.options('*', cors);

app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: true })); //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API ENDPOINTS

app.use('/api', router); //

app.get('/api/*', (req, res) => {
    db.usuario.findAll().then(users => res.json(users));
})

app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
}); //

app.set('PORT', process.env.PORT || 3000); //

if (process.env.NODE_ENV !== 'test') {
    app.listen(app.get('PORT'), () => {
        console.log('Server on PORT ' + app.get('PORT') + ' on dev');
        console.log('Server up');
    });
}

module.exports = app;