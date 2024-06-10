const { Productos } = require('../db.js');

const lista1 = require('./AccParaPintura/bandejasPintorYAcc.js');

const createLista1 = async () => await Productos.bulkCreate(lista1);
    

module.exports = { createLista1 };

