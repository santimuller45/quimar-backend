const { listaAceiteDeLinoYAceiteLubricante } = require ('../aceites.js');
const { listaDiluyentes } = require ('../diluyentes.js');
const { listaQuimicosParaFerreterias } = require ('../quimicos.js');

const listProducts10 = [ 
    ...listaAceiteDeLinoYAceiteLubricante,
    ...listaDiluyentes,
    ...listaQuimicosParaFerreterias
];

module.exports = { listProducts10 };