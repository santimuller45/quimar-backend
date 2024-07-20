const { listaCalVivaYesoParisCemento } = require('../calYesoCemento.js');
const { listaFerrites } = require('../ferrites.js');
const { listaKlaukol } = require('../klaukol.js');
const { listaSika } = require('../sika.js');
const { listaSupertech } = require('../supertech.js');

const listProducts03 = [ 
    ...listaCalVivaYesoParisCemento,
    ...listaFerrites, 
    ...listaKlaukol, 
    ...listaSika, 
    ...listaSupertech
];

module.exports = { listProducts03 };