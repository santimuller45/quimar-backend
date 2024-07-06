const app = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;

//HELPERS CREACIÓN DE BASE DE DATOS ----------->

const { createAllRubros } = require('./src/helper/helperRubro.js');
const { createLista1 } = require('./src/helper/helperProductos.js');

//------

// Syncing all the models at once.
conn.sync({ force: true }).then( async () => {  // cambio a alter en lugar de force
    await createLista1();       //HELPER PRODUCTOS
    await createAllRubros();    //HELPER RUBROS
    app.listen( PORT, () => {
        console.log('Servidor corriendo en el puerto' , PORT);
    });
});