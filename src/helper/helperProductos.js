const { Productos } = require('../db.js');

const {listaBandejasDePintorYAcc} = require('./AccParaPintura/bandejasPintorYAcc.js');

const createLista1 = async () => await Productos.bulkCreate(listaBandejasDePintorYAcc);
    

module.exports = { createLista1 };

