const { subRubroQuimDilu01 } = require('../aceites.js');
const { subRubroQuimDilu02 } = require('../diluyentes.js');
const { subRubroQuimDilu03 } = require('../quimicos.js');

const rubroQuimicosYDiluyentes = {
    name:"QUIMICOS Y DILUYENTES",
    subRubro: [
        subRubroQuimDilu01,
        subRubroQuimDilu02,
        subRubroQuimDilu03 
    ]
};

module.exports = { rubroQuimicosYDiluyentes };