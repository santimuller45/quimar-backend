const { Router } = require("express");

const { getUsersHandler, createUserHandler, loginUserHandler } = require('../handlers/userHandlers.js')

const userRouter = Router();

userRouter.get('/', getUsersHandler);
userRouter.post('/register', createUserHandler);
userRouter.post('/login', loginUserHandler);

module.exports = userRouter;