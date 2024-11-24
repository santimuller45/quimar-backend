const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const { handlerGetProducts, handlerGetProductByID, handlerPostProduct, handlerPutProduct, handlerPutPriceProduct } = require('../handlers/productosHandlers.js');

// Configuración de Multer para manejar la subida de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../assets/img')); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Añadir timestamp al nombre del archivo
    }
});

const upload = multer({ storage });

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