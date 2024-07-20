const { listaBandejasDePintorYAcc } = require('../bandejasPintorYAcc.js');
const { listaLijasYAbrasivos } = require('../lijasYAbrasivos.js');
const { listaMiniRodillosElCoati } = require('../miniRodillosCoati.js');
const { listaPincelesElCoati } = require('../pincelesCoati.js');
const { listaPincelesElCoatiLumar } = require('../pincelesCoatiLumar.js');
const { listaRodillosElCoatiLumar } = require('../rodillosCoatiLumar.js');

const listProducts01 = [ 
    ...listaBandejasDePintorYAcc,
    ...listaLijasYAbrasivos, 
    ...listaMiniRodillosElCoati, 
    ...listaPincelesElCoati, 
    ...listaPincelesElCoatiLumar, 
    ...listaRodillosElCoatiLumar
];

module.exports = { listProducts01 };