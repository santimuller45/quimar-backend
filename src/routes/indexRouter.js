const { Router } = require('express');
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
router.use('/productos', productRouter);

// ROUTER DE LOS RUBROS
router.use('/rubro', rubroRouter);

// ROUTER DE LOS USERS
router.use('/users', userRouter);

// ROUTER DE LAS ORDERS
router.use('/orders', ordersRouter);

// OTROS ROUTERS
router.use('/getDate', handlerGetDate);

//--------------------------------------

module.exports = router;