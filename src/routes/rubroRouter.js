const { Router } = require("express");

const { handlerGetRubros, handlerGetRubroByID, handlerCreateRubro, handlerAddSubRubro } = require('../handlers/rubroHandler.js');

const rubroRouter = Router();

// GET
rubroRouter.get('/', handlerGetRubros);
rubroRouter.get('/:rubroID', handlerGetRubroByID);

// PUT
rubroRouter.put('/config-rubro', handlerAddSubRubro);

// POST
rubroRouter.post('/register-rubro', handlerCreateRubro);

module.exports = rubroRouter;