const { subRubroZing01 } = require('../caballetesCumbrerasTechos.js');
const { subRubroZing02 } = require('../canaletasYAccTechos.js');
const { subRubroZing03 } = require('../cañosYAccGalvanizados.js');
const { subRubroZing04 } = require('../cañoYAccParaSalamandra.js');
const { subRubroZing05 } = require('../cenefasTechos.js');
const { subRubroZing06 } = require('../extractoresEolicosAlum.js');
const { subRubroZing07 } = require('../grampasOmega.js');
const { subRubroZing08 } = require('../reduccionesGalvanizadas.js');

const rubroZingueria = {
    name:"ZINGUERIA",
    subRubro: [
        subRubroZing01,
        subRubroZing02,
        subRubroZing03,
        subRubroZing04,
        subRubroZing05,
        subRubroZing06,
        subRubroZing07,
        subRubroZing08
    ]
};

module.exports = { rubroZingueria };