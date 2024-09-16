const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

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

// Ruta para subir imágenes
router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.status(200).send(`File uploaded successfully: ${req.file.filename}`);
});

module.exports = router;