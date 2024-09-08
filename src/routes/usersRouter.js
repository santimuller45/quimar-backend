const { Router } = require("express");

const { getUsersHandler, createUserHandler, loginUserHandler, updateUserPasswordHandler, updateUserHandler } = require('../handlers/userHandlers.js')

const userRouter = Router();

// GET
userRouter.get('/', getUsersHandler);

// PUT
userRouter.put('/config-users', updateUserHandler);
userRouter.put('/forgot-password', updateUserPasswordHandler);

//POST
userRouter.post('/register', createUserHandler);
userRouter.post('/login', loginUserHandler);

module.exports = userRouter;