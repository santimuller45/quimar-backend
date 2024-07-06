const { Rubro } = require('../db.js');

// TRAER TODOS LOS RUBROS ACA-------------->
const { rubroAccParaPintura } = require('./AccParaPintura/RubroAccPint/rubroAccPint.js');
const { rubroArtLimpieza } = require('./ArtLimpiezaYVarios/RubroArtLimp/rubroArtLimp.js');
const { rubroArtConstru } = require('./ArtParaConstruccion/RubroConstru/rubroConstru.js');
const { rubroAutomotor } = require('./Automotor/RubroAutomotor/rubroAutomotor.js');
const { rubroFerreteria } = require('./Ferreteria/RubroFerreteria/rubroFerreteria.js');
const { rubroInsectRat } = require('./InsecticidasYRaticidas/RubroInsecRat/rubroInsecRat.js');
const { rubroPinturas } = require('./Pinturas/RubroPinturas/rubroPinturas.js');
const { rubroPolietilenoYAgro } = require('./PolietilenoYAgrotileno/RubroPoliYAgro/rubroPoliYAgro.js');
const { rubroPiletas } = require('./ProductosParaPiletas/RubroPiletas/rubroPiletas.js');
const { rubroQuimicosYDiluyentes } = require('./QuimicosYDiluyentes/RubroQuim/rubroQuimicosDilu.js');
const { rubroZingueria } = require('./Zingueria/RubroZingueria/rubroZingueria.js');

//CREAR CADA RUBRO EN LA DB

const createRubro01 = async () => await Rubro.create(rubroAccParaPintura);
const createRubro02 = async () => await Rubro.create(rubroArtLimpieza);
const createRubro03 = async () => await Rubro.create(rubroArtConstru);
const createRubro04 = async () => await Rubro.create(rubroAutomotor);
const createRubro05 = async () => await Rubro.create(rubroFerreteria);
const createRubro06 = async () => await Rubro.create(rubroInsectRat);
const createRubro07 = async () => await Rubro.create(rubroPinturas);
const createRubro08 = async () => await Rubro.create(rubroPolietilenoYAgro);
const createRubro09 = async () => await Rubro.create(rubroPiletas);
const createRubro10 = async () => await Rubro.create(rubroQuimicosYDiluyentes);
const createRubro11 = async () => await Rubro.create(rubroZingueria);

//FUNCION PARA CREAR TODOS LOS RUBROS

const createAllRubros = async () => {
    await createRubro01();
    await createRubro02();
    await createRubro03();
    await createRubro04();
    await createRubro05();
    await createRubro06();
    await createRubro07();
    await createRubro08();
    await createRubro09();
    await createRubro10();
    await createRubro11();
};

module.exports = { createAllRubros };