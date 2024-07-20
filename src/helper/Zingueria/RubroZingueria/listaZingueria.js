const { listaCaballetesCumbrerasParaTechos } = require('../caballetesCumbrerasTechos.js');
const { listaCanaletasYAccParaTechos } = require('../canaletasYAccTechos.js');
const { listaCañosYAccGalvanizadosPVent } = require('../cañosYAccGalvanizados.js');
const { listaCañoYAccParaSalamandra } = require('../cañoYAccParaSalamandra.js');
const { listaCenefasParaTechos } = require('../cenefasTechos.js');
const { listaExtractoresEolicosDeAlum } = require('../extractoresEolicosAlum.js');
const { listaGrampasOmega } = require('../grampasOmega.js');
const { listaReduccionesGalvanizadas } = require('../reduccionesGalvanizadas.js');

const listProducts11 = [ 
    ...listaCaballetesCumbrerasParaTechos,
    ...listaCanaletasYAccParaTechos,
    ...listaCañosYAccGalvanizadosPVent,
    ...listaCañoYAccParaSalamandra,
    ...listaCenefasParaTechos,
    ...listaExtractoresEolicosDeAlum,
    ...listaGrampasOmega,
    ...listaReduccionesGalvanizadas
];

module.exports = { listProducts11 };