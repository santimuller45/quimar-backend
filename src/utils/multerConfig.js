const multer = require('multer');

const storage = multer.memoryStorage(); // Usamos buffer
const upload = multer({ storage });

module.exports = upload;