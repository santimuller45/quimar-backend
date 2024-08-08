const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//----------------------

const productRouter = require('./productosRouter.js');
const rubroRouter = require("./rubroRouter.js");
const { handlerGetDate, handlerGetSubRubros } = require('../handlers/extraHandler.js');

//----------------------

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//---------------------------------------

router.use('/productos', productRouter);
router.use('/rubro', rubroRouter);
router.use('/subRubro', handlerGetSubRubros);
router.use('/getDateNow', handlerGetDate);
// router.use("/users", usersRouter);

//--------------------------------------

module.exports = router;