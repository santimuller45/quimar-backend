const subRubroZing08 = 'Reducciones Galvanizadas';

// IMG ------->
const { images} = require('../../assets/assets.js');
// <-------------

const listaReduccionesGalvanizadas = [
    {
        codigo: 4060,
        name: "CONICA DE 4\" A 3\"",
        price: 3574.08,
        imagen: images.zingueria.image4060,
        descripcion: "Reducción galvanizada cónica de 4 pulgadas a 3 pulgadas, utilizada para conectar dos caños de diferentes diámetros en sistemas de ventilación industrial y residencial.",
        category: subRubroZing08
    },
    {
        codigo: 4062,
        name: "CONICA DE 5\" A 4\"",
        price: 4014.72,
        imagen: images.zingueria.image4060,
        descripcion: "Reducción galvanizada cónica de 5 pulgadas a 4 pulgadas, utilizada para conectar dos caños de diferentes diámetros en sistemas de ventilación industrial y residencial.",
        category: subRubroZing08
    },
    {
        codigo: 4064,
        name: "CONICA DE 6\" A 4\"",
        price: 4329.90,
        imagen: images.zingueria.image4060,
        descripcion: "Reducción galvanizada cónica de 6 pulgadas a 4 pulgadas, utilizada para conectar dos caños de diferentes diámetros en sistemas de ventilación industrial y residencial.",
        category: subRubroZing08
    },
    {
        codigo: 4066,
        name: "CONICA DE 6\" A 5\"",
        price: 4776.66,
        imagen: images.zingueria.image4060,
        descripcion: "Reducción galvanizada cónica de 6 pulgadas a 5 pulgadas, utilizada para conectar dos caños de diferentes diámetros en sistemas de ventilación industrial y residencial.",
        category: subRubroZing08
    }
];

module.exports = { listaReduccionesGalvanizadas, subRubroZing08 };