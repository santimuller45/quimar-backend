const subRubroQuimDilu01 = 'Aceites';

// IMG ---------->
const { noImageDefault, imageLino900cc, imageLino5lt } = require('../../assets/assets.js');
// <--------------

const listaAceiteDeLinoYAceiteLubricante = [
    {
        price: 2994.54, 
        codigo: '1150', 
        name: 'ACEITE DE LINO X 900 cc', 
        imagen: imageLino900cc, 
        descripcion: 'Descripción del producto', 
        category: subRubroQuimDilu01 
    },
    { 
        price: 15218.04, 
        codigo: '1151', 
        name: 'ACEITE DE LINO X 5 lts', 
        imagen: imageLino5lt, 
        descripcion: 'Descripción del producto', 
        category: subRubroQuimDilu01 
    },
    { 
        price: 483021.00, 
        codigo: '1152', 
        name: 'ACEITE DE LINO X 200 lts', 
        imagen: noImageDefault, 
        descripcion: 'Descripción del producto', 
        category: subRubroQuimDilu01 
    }
];

module.exports = { listaAceiteDeLinoYAceiteLubricante, subRubroQuimDilu01 };