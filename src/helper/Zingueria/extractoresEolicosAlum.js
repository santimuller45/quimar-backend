const subRubroZing06 = 'Extractores Eolicos de Aluminio';

// IMG ------->
const { noImageDefault } = require('../../assets/assets.js');
// <-------------

const listaExtractoresEolicosDeAlum = [
    {
        codigo: 4120,
        name: "EXTRACTOR DE 4\"",
        imagen: noImageDefault,
        price: 64657.80,
        descripcion: "Extractor eólico de aluminio de 4 pulgadas, ideal para ventilación de ambientes industriales.",
        category: subRubroZing06
    },
    {
        codigo: 4122,
        name: "EXTRACTOR DE 6\"",
        imagen: noImageDefault,
        price: 71585.43,
        descripcion: "Extractor eólico de aluminio de 6 pulgadas, diseñado para proporcionar una ventilación eficiente en espacios grandes.",
        category: subRubroZing06
    },
    {
        codigo: 4124,
        name: "EXTRACTOR DE 8\"",
        imagen: noImageDefault,
        price: 99911.65,
        descripcion: "Extractor eólico de aluminio de 8 pulgadas, resistente y duradero, adecuado para entornos industriales exigentes.",
        category: subRubroZing06
    },
    {
        codigo: 4126,
        name: "EXTRACTOR DE 10\"",
        imagen: noImageDefault,
        price: 116676.48,
        descripcion: "Extractor eólico de aluminio de 10 pulgadas, diseñado para ofrecer una ventilación óptima en almacenes y fábricas.",
        category: subRubroZing06
    },
    {
        codigo: 4128,
        name: "EXTRACTOR DE 12\"",
        imagen: noImageDefault,
        price: 130850.63,
        descripcion: "Extractor eólico de aluminio de 12 pulgadas, ideal para grandes espacios que requieren una ventilación eficiente y continua.",
        category: subRubroZing06
    }
];

module.exports = { listaExtractoresEolicosDeAlum, subRubroZing06 };