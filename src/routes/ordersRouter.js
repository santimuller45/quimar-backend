const { Router } = require('express');

const { handlerGetAllOrders, handlerGetOrderBy, handlerUpdateOrder, handlerCreateOrder, handlerGetOrderByDate } = require('../handlers/orderHandlers.js');

const ordersRouter = Router();

// GET
ordersRouter.get("/", handlerGetAllOrders);
ordersRouter.get("/filter-order", handlerGetOrderByDate);
ordersRouter.get('/:orderID', handlerGetOrderBy);

// PUT
ordersRouter.put('/config-order', handlerUpdateOrder);

// POST
ordersRouter.post('/register-order', handlerCreateOrder);

module.exports = ordersRouter;