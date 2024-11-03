const express = require('express');
const cookieParser = require('cookie-parser');
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

// Configuración de CORS
const allowedOrigins = [
    'https://tu-frontend-en-vercel.vercel.app', // Dominio de Vercel
    'http://localhost:3001', // Para desarrollo local, si usas puerto 3001 en el front
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
}));

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// MIS ROUTER ---->
app.use('/', mainRouter);
// <---------------

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
//     res.header('Access-Control-Allow-Origin', '*');
//     // res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); //! no borrar! este setting se usa para el deploy
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });


// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = app;