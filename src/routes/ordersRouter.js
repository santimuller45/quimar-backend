const { Router } = require('express');

const { handlerGetAllOrders, handlerGetOrderById, handlerUpdateOrder, handlerCreateOrder } = require('../handlers/orderHandlers.js');

const ordersRouter = Router();

// GET
ordersRouter.get("/", handlerGetAllOrders);
ordersRouter.get('/:orderID', handlerGetOrderById);

// PUT
ordersRouter.put('/config-order', handlerUpdateOrder);

// POST
ordersRouter.post('/register-order', handlerCreateOrder);

module.exports = ordersRouter;