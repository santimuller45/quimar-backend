const { Router } = require('express');

// ---- UPLOAD IMAGES ----
const upload = require('../utils/multerConfig.js');
// -----------------------

// ---- HANDLERS ----
const {
    handlerGetProducts,
    handlerGetProductByID,
    handlerPostProduct,
    handlerPutProduct,
    handlerPutPriceProduct
} = require('../handlers/productosHandlers.js');
// ------------------

const productRouter = Router();

// GET
productRouter.get('/', handlerGetProducts);
productRouter.get('/:productID', handlerGetProductByID);

// PUT
productRouter.put('/config-products', upload.single('imagen'), handlerPutProduct);
productRouter.put('/config-products-price', handlerPutPriceProduct);

// POST para crear un producto
productRouter.post('/register-product', upload.single('imagen'), handlerPostProduct);

module.exports = productRouter;