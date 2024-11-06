const app = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;

//HELPERS CREACIÓN DE BASE DE DATOS ----------->

const { createAllRubros } = require('./src/helper/helperRubro.js');
const { createAllProducts } = require('./src/helper/helperProductos.js');
const { createAdmin } = require('./src/controllers/extraController.js');

//------

// Syncing all the models at once.
conn.sync({ force: true }).then( async () => {  // cambio a alter en lugar de force
    await createAllProducts();       //HELPER PRODUCTOS
    await createAllRubros();    //HELPER RUBROS
    await createAdmin();
    app.listen( PORT, () => {
        console.log('Servidor corriendo en el puerto' , PORT);
    });
});