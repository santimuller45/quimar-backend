const subRubroPinturas19 = 'Pintura en Polvo';
const { images } = require('../../assets/assets.js');

const listaPinturaEnPolvo = [
    {
        price: 1759.50, 
        codigo: 2075, 
        name: "PINTURA AL AGUA X 4 kg. BLANCA", 
        imagen: images.pinturas.image2075, 
        descripcion: 'Descripción del producto', 
        category: subRubroPinturas19
    }
];

module.exports = { listaPinturaEnPolvo, subRubroPinturas19 };