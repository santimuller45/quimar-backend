const { Router } = require("express");

const { handlerGetRubros, handlerGetRubroByID } = require('../handlers/rubroHandler.js');

const rubroRouter = Router();

rubroRouter.get('/', handlerGetRubros);
rubroRouter.get('/:rubroID', handlerGetRubroByID);

module.exports = rubroRouter;