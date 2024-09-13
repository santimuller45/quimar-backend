const subRubroFerr03 = 'Tanzas';
const { 
    noImageDefault,
    image2441, 
    image2450
 } = require('../../assets/assets.js');

const listaTanzas = [
    {
        codigo: 2440,
        name: "TANZA REDONDA 2 mm BOBINA 290 MTS. 1.1 KG.",
        price: 16830.00,
        imagen: noImageDefault,
        descripcion: "La tanza redonda de 2 mm es ideal para diversas aplicaciones en jardinería, agricultura y construcción. Su resistencia y durabilidad la hacen perfecta para cortar y atar materiales.",
        category: subRubroFerr03
    },
    {
        codigo: 2441,
        name: "TANZA CUADRADA  2.5 MM  150MTS . 1 KG.",
        price: 16830.00,
        imagen: image2441,
        descripcion: "La tanza cuadrada de 2.5 mm es perfecta para cortar y atar materiales en trabajos de jardinería, agricultura y construcción. Su diseño resistente garantiza un rendimiento óptimo.",
        category: subRubroFerr03
    },
    {
        codigo: 2442,
        name: "TANZA REDONDA 3 mm X 10 KG. 1200 MTS.",
        price: 16830.00,
        imagen: image2441,
        descripcion: "La tanza redonda de 3 mm es ideal para cortar y atar materiales en trabajos de jardinería, agricultura y construcción. Su gran resistencia y longitud la hacen perfecta para proyectos de gran envergadura.",
        category: subRubroFerr03
    },
    {
        codigo: 2450,
        name: "TANZA DE ALBAÑIL 0.80 X 100 MTS.",
        price: 2475.30,
        imagen: image2450,
        descripcion: "La tanza de albañil de 0.80 mm es perfecta para realizar trabajos de nivelación y alineación en la construcción. Su resistencia y flexibilidad la hacen ideal para diversas aplicaciones.",
        category: subRubroFerr03
    }
];

module.exports = { listaTanzas, subRubroFerr03 };