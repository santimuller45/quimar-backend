const subRubroZing05 = 'Cenefas para Techos';

// IMG ------->
const { image7300 } = require('../../assets/assets.js');
// <-------------

const listaCenefasParaTechos = [
    {
        codigo: 7300,
        name: "CENEFAS 15 X 15 POR UN METRO",
        imagen: image7300,
        price: 5569.20,
        category: subRubroZing05,
        description: "Elemento decorativo para techos, con medidas de 15 x 15, vendido por metro lineal."
    },
    {
        codigo: 7310,
        name: "CENEFAS 20 X 20 POR UN METRO",
        imagen: image7300,
        price: 7956.00,
        category: subRubroZing05,
        description: "Elemento decorativo para techos, con medidas de 20 x 20, vendido por metro lineal."
    }
];

module.exports = { listaCenefasParaTechos, subRubroZing05 };