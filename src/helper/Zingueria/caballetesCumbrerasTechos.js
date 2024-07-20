const subRubroZing01 = 'Caballetes / Cumbreras para techos';

// IMG ------->
const imageCaballetes = '../../assets/img/zingueria/caballete.png';
// <-------------

const listaCaballetesCumbrerasParaTechos = [
    {
        codigo: 7200,
        name: "CABALLETE DE 33 CM. POR METRO",
        imagen: imageCaballetes,
        price: 5661.00,
        category: subRubroZing01,
        description: "Pieza de techo diseñada para cubrir y proteger la unión entre dos pendientes."
    },
    {
        codigo: 7210,
        name: "CABALLETE DE 40 CM. POR METRO",
        imagen: imageCaballetes,
        price: 7956.00,
        category: subRubroZing01,
        description: "Estructura para techos que se instala en la cumbrera para cubrir y proteger la unión entre dos pendientes."
    }
];

module.exports = { listaCaballetesCumbrerasParaTechos, subRubroZing01 };