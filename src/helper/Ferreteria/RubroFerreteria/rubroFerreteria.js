const { subRubroFerr01 } = require('../cobertoresParaCaños.js');
const { subRubroFerr02 } = require('../precintos.js');
const { subRubroFerr03 } = require('../tanzas.js');
const { subRubroFerr04 } = require('../tarugosDeNylon.js');
const { subRubroFerr05 } = require('../tornillos.js');

const rubroFerreteria = {
    name:"FERRETERIA",
    subRubro: [
        subRubroFerr01,
        subRubroFerr02 ,
        subRubroFerr03 ,
        subRubroFerr04 ,
        subRubroFerr05
    ]
};

module.exports = { rubroFerreteria };