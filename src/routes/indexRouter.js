const { Router } = require('express');
require('dotenv').config();
const { PRODUCTS_MAIN_ROUTER, RUBROS_MAIN_ROUTER, USERS_MAIN_ROUTER, ORDERS_MAIN_ROUTER, DATES_MAIN_ROUTER } = process.env; 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//----------------------

const productRouter = require('./productosRouter.js');
const rubroRouter = require("./rubroRouter.js");
const userRouter = require('./usersRouter.js');
const ordersRouter = require('./ordersRouter.js');
const { handlerGetDate } = require('../handlers/extraHandler.js');

//----------------------

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//---------------------------------------

// ROUTER DE LOS PRODUCTOS
router.use(PRODUCTS_MAIN_ROUTER, productRouter);

// ROUTER DE LOS RUBROS
router.use(RUBROS_MAIN_ROUTER, rubroRouter);

// ROUTER DE LOS USERS
router.use(USERS_MAIN_ROUTER, userRouter);

// ROUTER DE LAS ORDERS
router.use(ORDERS_MAIN_ROUTER, ordersRouter);

// OTROS ROUTERS
router.use(DATES_MAIN_ROUTER, handlerGetDate);

//--------------------------------------

module.exports = router;