const { Router } = require("express");

const { handlerGetProducts, handlerGetProductByID, handlerPostProduct, handlerPutProduct } = require('../handlers/productosHandlers.js');

const productRouter = Router();

// GET
productRouter.get('/', handlerGetProducts);
productRouter.get('/:productID', handlerGetProductByID);

// PUT
productRouter.put('/config-products', handlerPutProduct);

// POST
productRouter.post('/registerProduct', handlerPostProduct);

module.exports = productRouter;