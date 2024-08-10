const subRubroZing02 = 'Canaletas y Acc. para techos';

// IMG ------->
const { 
    imageCanaletaMediaCaña,
    imageCabeceraMediaCaña,
    imageBoquetaMediaCaña,
    imageIntermediaMediaCaña,
    imageSoporteMediaCaña,
    imageEsquineroMediaCaña,
    imageRinconeroMediaCaña
 } = require('../../assets/assets.js');
// <-------------

const listaCanaletasYAccParaTechos = [
    {
        codigo: 7000,
        name: "CANALETA 1/2 CAÑA POR METRO DE 15 CM.",
        imagen: imageCanaletaMediaCaña,
        price: 5648.76,
        category: subRubroZing02,
        description: "Canalón de 15 cm de ancho, diseñado para drenar agua de techos y estructuras."
    },
    {
        codigo: 7010,
        name: "CABECERA 1/2 CAÑA DE 15 CM.",
        imagen: imageCabeceraMediaCaña,
        price: 7650.00,
        category: subRubroZing02,
        description: "Pieza de canalón que se instala en el extremo del techo para capturar el agua."
    },
    {
        codigo: 7020,
        name: "BOQUETA 1/2 CAÑA DE 15 CM.",
        imagen: imageBoquetaMediaCaña,
        price: 8721.00,
        category: subRubroZing02,
        description: "Componente del sistema de canalones que dirige el flujo de agua hacia abajo."
    },
    {
        codigo: 7030,
        name: "INTERMEDIA 1/2 CAÑA 15CM.",
        imagen: imageIntermediaMediaCaña,
        price: 8721.00,
        category: subRubroZing02,
        description: "Sección de canalón colocada entre la cabecera y la boqueta para extender la longitud."
    },
    {
        codigo: 7040,
        name: "SOPORTE PARA 1/2 CAÑA 15 CM.",
        imagen: imageSoporteMediaCaña,
        price: 2169.33,
        category: subRubroZing02,
        description: "Accesorio que asegura la estabilidad y el montaje adecuado del canalón en la estructura."
    },
    {
        codigo: 7050,
        name: "ESQUINERO 1/2 CAÑA 15 CM.",
        imagen: imageEsquineroMediaCaña,
        price: 21267.00,
        category: subRubroZing02,
        description: "Pieza especial para canalones utilizada en esquinas para permitir un flujo continuo de agua."
    },
    {
        codigo: 7060,
        name: "RINCONERO 1/2 CAÑA 15 CM. EN ANGULO 90°",
        imagen: imageRinconeroMediaCaña,
        price: 21267.00,
        category: subRubroZing02,
        description: "Esquina de canalón que se coloca en ángulos de 90 grados para cambiar la dirección del flujo de agua."
    }
];

module.exports = { listaCanaletasYAccParaTechos, subRubroZing02 };