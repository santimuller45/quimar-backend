const { Router } = require("express");

const { getUsersHandler, createUserHandler, loginUserHandler, updateUserHandler } = require('../handlers/userHandlers.js')

const userRouter = Router();

// GET
userRouter.get('/', getUsersHandler);

// PUT
userRouter.put('/', updateUserHandler);

//POST
userRouter.post('/register', createUserHandler);
userRouter.post('/login', loginUserHandler);

module.exports = userRouter;