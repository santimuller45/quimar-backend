const { Router } = require("express");

const { handlerGetProducts, handlerGetProductByID } = require('../handlers/productosHandlers.js')

const productRouter = Router();

productRouter.get('/', handlerGetProducts);
productRouter.get('/:productID', handlerGetProductByID);
// foodRouter.post('/', handlerPostFood);
// foodRouter.put('', handlerPutFood);

module.exports = productRouter;