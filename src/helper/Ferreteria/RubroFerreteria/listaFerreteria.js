const { listaCobertoresParaCaños } = require ('../cobertoresParaCaños.js');
const { listaPrecintos } = require ('../precintos.js');
const { listaTanzas } = require ('../tanzas.js');
const { listaTarugosDeNylon } = require ('../tarugosDeNylon.js');
const { listaTornillos } = require ('../tornillos.js');

const listProducts05 = [ 
    ...listaCobertoresParaCaños,
    ...listaPrecintos, 
    ...listaTanzas, 
    ...listaTarugosDeNylon, 
    ...listaTornillos
];

module.exports = { listProducts05 };