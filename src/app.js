const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('./db.js');
// const cors = require('cors');
const app = express();
app.name = 'DISTRI-QUIMAR';

const mainRouter = require('./routes/indexRouter.js');

// ESTE ES PARA SUBIR LOS ARCHIVOS QUE ESTAN ALMACENADOS EN LA CARPETA ASSETS---->
const path = require('path');
app.use('/assets', express.static(path.join(__dirname, 'assets')));
// <-------------------------------------

// app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); //! no borrar! este setting se usa para el deploy
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// MIS ROUTER ---->
app.use('/', mainRouter);
// <---------------

// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = app;