const express = require('express');
// const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
require('./db.js');

const app = express();
app.name = 'DISTRI-QUIMAR';

const mainRouter = require('./routes/indexRouter.js');

// ESTE ES PARA SUBIR LOS ARCHIVOS QUE ESTAN ALMACENADOS EN LA CARPETA ASSETS---->
const path = require('path');
app.use('/assets', express.static(path.join(__dirname, 'assets')));
// <-------------------------------------

require('dotenv').config();
const { URL_WEB_DEPLOY, URL_WEB_DEPLOY2 } = process.env;

// CONFIGURACION DE CORS PARA EL DEPLOY CON DOMINIO

// CONFIGURACIÓN DE CORS PARA EL DEPLOY CON DOMINIO
const allowedOrigins = [URL_WEB_DEPLOY, URL_WEB_DEPLOY2];

// const corsOptions = {
//     origin: URL_WEB_DEPLOY,
//     credentials: true, // permite el envío de cookies si tu aplicación lo necesita
//     optionsSuccessStatus: 200
// };

const corsOptions = {
    origin: (origin, callback) => {
        // Permitir solicitudes de orígenes en `allowedOrigins`
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true, // permite el envío de cookies si tu aplicación lo necesita
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
// app.use(cookieParser());

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