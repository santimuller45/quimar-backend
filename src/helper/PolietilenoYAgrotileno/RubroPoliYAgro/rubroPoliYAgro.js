const { subRubroPoliAgro01 } = require('../nylonCristal.js');
const { subRubroPoliAgro02 } = require('../nylonNegro.js');

const rubroPolietilenoYAgro = {
    name:"Polietileno y Agrotileno",
    subRubro: [
        subRubroPoliAgro01,
        subRubroPoliAgro02
    ]
};

module.exports = { rubroPolietilenoYAgro };