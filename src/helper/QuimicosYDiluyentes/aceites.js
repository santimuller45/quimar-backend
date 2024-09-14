const subRubroQuimDilu01 = 'Aceites';

// IMG ---------->
const { images } = require('../../assets/assets.js');
// <--------------

const listaAceiteDeLinoYAceiteLubricante = [
    {
        price: 2994.54, 
        codigo: '1150', 
        name: 'ACEITE DE LINO X 900 cc', 
        imagen: images.aceites.image1150, 
        descripcion: 'Descripción del producto', 
        category: subRubroQuimDilu01 
    },
    { 
        price: 15218.04, 
        codigo: '1151', 
        name: 'ACEITE DE LINO X 5 lts', 
        imagen: images.aceites.image1151, 
        descripcion: 'Descripción del producto', 
        category: subRubroQuimDilu01 
    },
    { 
        price: 483021.00, 
        codigo: '1152', 
        name: 'ACEITE DE LINO X 200 lts', 
        imagen: images.noImageDefault, 
        descripcion: 'Descripción del producto', 
        category: subRubroQuimDilu01 
    }
];

module.exports = { listaAceiteDeLinoYAceiteLubricante, subRubroQuimDilu01 };