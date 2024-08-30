const { Router } = require("express");

const { handlerGetProducts, handlerGetProductByID, handlerPostProduct, handlerPutProduct } = require('../handlers/productosHandlers.js');

const productRouter = Router();

productRouter.get('/', handlerGetProducts);
productRouter.put('', handlerPutProduct);
productRouter.get('/:productID', handlerGetProductByID);
// productRouter.get('/findBycode', handlerGetProductByCodigo);
productRouter.post('/registerProduct', handlerPostProduct);

module.exports = productRouter;