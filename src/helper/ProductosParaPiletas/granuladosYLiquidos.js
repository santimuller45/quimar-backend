const subRubroPiletas01 = 'Granulados y Liquidos';

// IMG ------->
const { images } = require('../../assets/assets.js');
// <-------------

const listaGranuladosYLiquidos = [
    {
        codigo: 7100,
        name: "CLORO LIQUIDO P/PILETAS  X 5 LT  AL 80 %",
        price: 4250.00,
        imagen: images.piletas.image7100,
        descripcion: "El cloro líquido para piscinas es ideal para desinfectar y mantener el agua limpia y cristalina. Su alta concentración y eficacia garantizan una desinfección completa y duradera.",
        category: subRubroPiletas01
    },
    {
        codigo: 7105,
        name: "CLORO GRANULADO DILUCION LENTA X 1 KG.",
        price: 7200.18,
        imagen: images.piletas.image7105,
        descripcion: "El cloro granulado de dilución lenta es ideal para desinfectar y mantener el agua limpia y cristalina en piscinas y sistemas de tratamiento de agua. Su liberación gradual asegura una desinfección continua y duradera.",
        category: subRubroPiletas01
    },
    {
        codigo: 7110,
        name: "PASTILLAS MULTIACCION X 200g X 1 KG.",
        price: 8526.69,
        imagen: images.piletas.image7110,
        descripcion: "Las pastillas multiacción son ideales para desinfectar y mantener el agua limpia y cristalina en piscinas y sistemas de tratamiento de agua. Su fórmula concentrada ofrece una desinfección completa y duradera.",
        category: subRubroPiletas01
    },
    {
        codigo: 7115,
        name: "PASTILLAS MULTIACCION X 50g X 1 KG.",
        price: 7770.87,
        imagen: images.piletas.image7110,
        descripcion: "Las pastillas multiacción son ideales para desinfectar y mantener el agua limpia y cristalina en piscinas y sistemas de tratamiento de agua. Su fórmula concentrada ofrece una desinfección completa y duradera.",
        category: subRubroPiletas01
    },
    {
        codigo: 7120,
        name: "CLARIFICANTE CONCENT. X 1 LT",
        price: 5814.00,
        imagen: images.noImageDefault,
        descripcion: "El clarificante concentrado es ideal para mantener el agua de la piscina limpia y cristalina. Su fórmula especial elimina las partículas suspendidas y mejora la transparencia del agua.",
        category: subRubroPiletas01
    },
    {
        codigo: 7130,
        name: "ALGUICIDA CONCENT. X 1 LT",
        price: 9027.00,
        imagen: images.noImageDefault,
        descripcion: "El alguicida concentrado es ideal para prevenir y controlar el crecimiento de algas en piscinas y sistemas de tratamiento de agua. Su fórmula eficaz elimina las algas existentes y evita su proliferación.",
        category: subRubroPiletas01
    },
    {
        codigo: 7135,
        name: "ALGUICIDA  PAR PILETA DE LONA X 1 LT",
        price: 4281.26,
        imagen: images.noImageDefault,
        descripcion: "El alguicida para piletas de lona es ideal para prevenir y controlar el crecimiento de algas en piscinas portátiles y sistemas de tratamiento de agua. Su fórmula suave y eficaz protege la lona y garantiza una piscina limpia y segura.",
        category: subRubroPiletas01
    },
    {
        codigo: 7145,
        name: "TEST KIT PH/CLORO COMPLETO",
        price: 13760.00,
        imagen: images.piletas.image7145,
        descripcion: "El test kit de pH y cloro completo es ideal para medir y controlar los niveles de pH y cloro en piscinas y sistemas de tratamiento de agua. Su diseño práctico y preciso garantiza una correcta desinfección y equilibrio químico del agua.",
        category: subRubroPiletas01
    },
    {
        codigo: 7150,
        name: "SULFATO DE COBRE X 1 KG.",
        price: 19468.80,
        imagen: images.piletas.image7150,
        descripcion: "El sulfato de cobre es ideal para prevenir y controlar el crecimiento de algas en piscinas y sistemas de tratamiento de agua. Su fórmula concentrada elimina las algas existentes y evita su proliferación, manteniendo el agua limpia y cristalina.",
        category: subRubroPiletas01
    }
];

module.exports = { listaGranuladosYLiquidos, subRubroPiletas01 };