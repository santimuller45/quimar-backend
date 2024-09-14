const subRubroPinturas03 = 'Cal de blanqueo';
const { images } = require('../../assets/assets.js');

const listaCalDeBlanqueo = [
    {
        price: 1606.50, 
        codigo: 2070, 
        name: "CAL DE BLANQUEO x 4 kg.", 
        imagen: images.pinturas.image2070, 
        descripcion: 'Descripción del producto', 
        category: subRubroPinturas03
    },
    {
        price: 612.00, 
        codigo: 2071, 
        name: "LATIZADOR PARA CAL x 250 cc", 
        imagen: images.pinturas.image2071, 
        descripcion: 'Descripción del producto', 
        category: subRubroPinturas03
    }
];

module.exports = { listaCalDeBlanqueo, subRubroPinturas03 };