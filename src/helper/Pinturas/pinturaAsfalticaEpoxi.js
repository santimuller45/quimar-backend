const subRubroPinturas18 = 'Pintura Asfaltica Epoxi';
const { images } = require('../../assets/assets.js');

const listaPinturaAsfalticaYEpoxi = [
    { price: 2907.00, codigo: 2055, name: "PINTURA EPOXI DOS COMPONENTES X 80 C. C.", imagen: images.pinturas.image2055, descripcion: 'Descripción del producto', category: subRubroPinturas18},
    { price: 7200.00, codigo: 2056, name: "PINTURA EPOXI DOS COMPONENTES 250 C. C.", imagen: images.pinturas.image2055, descripcion: 'Descripción del producto', category: subRubroPinturas18},
    { price: 3720.00, codigo: 2060, name: "PINTURA ASFALTICA x 1l.", imagen: images.pinturas.image2060, descripcion: 'Descripción del producto', category: subRubroPinturas18},
    { price: 10771.20, codigo: 2061, name: "PINTURA ASFALTICA x 4 lts.", imagen: images.pinturas.image2060, descripcion: 'Descripción del producto', category: subRubroPinturas18},
    { price: 37042.20, codigo: 2062, name: "PINTURA ASFALTICA x 18 lts.", imagen: images.pinturas.image2062, descripcion: 'Descripción del producto', category: subRubroPinturas18}
];

module.exports = { listaPinturaAsfalticaYEpoxi, subRubroPinturas18 };