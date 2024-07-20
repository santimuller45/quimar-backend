const { listaNylonCristal } = require ('../nylonCristal.js');
const { listaNylonNegro } = require ('../nylonNegro.js');

const listProducts08 = [ 
    ...listaNylonCristal,
    ...listaNylonNegro,
];

module.exports = { listProducts08 };