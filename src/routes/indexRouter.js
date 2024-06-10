const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//----------------------

const productRouter = require('./productosRouter.js');
// const usersRouter = require("./usersRouter.js");

//----------------------

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//---------------------------------------

router.use("/productos", productRouter);
// router.use("/users", usersRouter);

//--------------------------------------

module.exports = router;