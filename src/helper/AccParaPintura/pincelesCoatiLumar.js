const subRubroAccPintura05 = 'Pinceles Coati/Lumar';
const { images } = require('../../assets/assets.js');

const listaPincelesElCoatiLumar = [
    {
        price: 4087.35,
        codigo: 2320,
        name: "PINCELETA CERDA BLANCA Nº 40",
        imagen: images.accPintura.image2320,
        descripcion: "Pinceleta de cerda blanca, tamaño número 40.",
        category: subRubroAccPintura05
    },
    {
        price: 4745.39,
        codigo: 2321,
        name: "PINCELETA CERDA BLANCA N° 50",
        imagen: images.accPintura.image2321,
        descripcion: "Pinceleta de cerda blanca, tamaño número 50.",
        category: subRubroAccPintura05
    }
];

module.exports = { listaPincelesElCoatiLumar, subRubroAccPintura05 };