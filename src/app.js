const express = require('express');
// const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
// Establece automáticamente cabeceras HTTP seguras para proteger tu app de ciertas vulnerabilidades web conocidas (como XSS, clickjacking, etc).
const helmet = require('helmet');
// Limpia los datos de entrada para eliminar scripts maliciosos y prevenir XSS (Cross-Site Scripting).
const xss = require('xss-clean');
require('./db.js');

const app = express();
app.name = 'DISTRI-QUIMAR';
// ✅ Confianza en el proxy de Railway
app.set('trust proxy', 1);

const mainRouter = require('./routes/indexRouter.js');

// ESTE ES PARA SUBIR LOS ARCHIVOS QUE ESTAN ALMACENADOS EN LA CARPETA ASSETS---->
// const path = require('path');
// app.use('/assets', express.static(path.join(__dirname, 'assets')));
// <-------------------------------------

require('dotenv').config();
const { URL_WEB_DEPLOY, URL_WEB_DEPLOY2 } = process.env;

// CONFIGURACIÓN DE CORS PARA EL DEPLOY CON DOMINIO
const allowedOrigins = [URL_WEB_DEPLOY, URL_WEB_DEPLOY2];

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

// Middlewares de seguridad
app.use(helmet());      // Protege las cabeceras
app.use(xss());         // Limpia los inputs de XSS
// ------------------------

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