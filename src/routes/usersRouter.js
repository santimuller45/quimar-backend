const { Router } = require("express");

const { getUsersHandler, createUserHandler, loginUserHandler, updateUserHandler } = require('../handlers/userHandlers.js')

const userRouter = Router();

userRouter.get('/', getUsersHandler);
userRouter.put('/', updateUserHandler);
userRouter.post('/register', createUserHandler);
userRouter.post('/login', loginUserHandler);

module.exports = userRouter;