const { Router } = require("express");

const { handlerGetRubros, handlerGetRubroByID } = require('../handlers/rubroHandler.js');

const rubroRouter = Router();

// GET
rubroRouter.get('/', handlerGetRubros);
rubroRouter.get('/:rubroID', handlerGetRubroByID);

// PUT

// POST

module.exports = rubroRouter;