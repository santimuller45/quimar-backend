const { Productos } = require('../db.js');

// TRAER TODOS LOS PRODUCTOS AQUI -------->
const { listProducts01 } = require('./AccParaPintura/RubroAccPint/listaAccPint.js');
const { listProducts02 } = require('./ArtLimpiezaYVarios/RubroArtLimp/listaArtLimp.js');
const { listProducts03 } = require('./ArtParaConstruccion/RubroConstru/listaConstru.js');
const { listProducts04 } = require('./Automotor/RubroAutomotor/listaAutomotor.js');
const { listProducts05 } = require ('./Ferreteria/RubroFerreteria/listaFerreteria.js');
const { listProducts06 } = require('./InsecticidasYRaticidas/RubroInsecRat/listaInsecRat.js');
const { listProducts07 } = require ('./Pinturas/RubroPinturas/listaPinturas.js');
const { listProducts08 } = require('./PolietilenoYAgrotileno/RubroPoliYAgro/listaPoliYAgro.js');
const { listProducts09 } = require('./ProductosParaPiletas/RubroPiletas/listaPiletas.js');
const { listProducts10 } = require('./QuimicosYDiluyentes/RubroQuim/listaQuimicosDilu.js');
const { listProducts11 } = require('./Zingueria/RubroZingueria/listaZingueria.js');
// <---------------------------------------

//CREAR CADA PRODUCTO EN LA DB ------------------------------------------------------->

const createProductList01 = async () => await Productos.bulkCreate(listProducts01);
const createProductList02 = async () => await Productos.bulkCreate(listProducts02);
const createProductList03 = async () => await Productos.bulkCreate(listProducts03);
const createProductList04 = async () => await Productos.bulkCreate(listProducts04);
const createProductList05 = async () => await Productos.bulkCreate(listProducts05);
const createProductList06 = async () => await Productos.bulkCreate(listProducts06);
const createProductList07 = async () => await Productos.bulkCreate(listProducts07);
const createProductList08 = async () => await Productos.bulkCreate(listProducts08);
const createProductList09 = async () => await Productos.bulkCreate(listProducts09);
const createProductList10 = async () => await Productos.bulkCreate(listProducts10);
const createProductList11 = async () => await Productos.bulkCreate(listProducts11);

// <----------------------------------------------------------------------------------

//FUNCION PARA CREAR TODOS LOS PRODUCTOS ------->

const createAllProducts = async () => {
    await createProductList01();
    await createProductList02();
    await createProductList03();
    await createProductList04();
    await createProductList05();
    await createProductList06();
    await createProductList07();
    await createProductList08();
    await createProductList09();
    await createProductList10();
    await createProductList11();
};

// <------------------------------------------
    

module.exports = { createAllProducts };