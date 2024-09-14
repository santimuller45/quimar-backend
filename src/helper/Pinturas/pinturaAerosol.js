const subRubroPinturas17 = 'Pintura en aerosol';
const { images } = require('../../assets/assets.js');

const listaPinturasEnAerosol = [
    { price: 2449.60, codigo: 2010, name: "PINT. AEROSOL x 240cc. AMARILLO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2011, name: "PINT. AEROSOL x 240cc. ANTIOXIDO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2012, name: "PINT. AEROSOL x 240cc. AZUL MARINO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2013, name: "PINT. AEROSOL x 240cc. BERMELLON", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2014, name: "PINT. AEROSOL x 240cc. BLANCO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2015, name: "PINT. AEROSOL x 240cc. BLANCO MATE", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2016, name: "PINT. AEROSOL x 240cc. CELESTE", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 3241.60, codigo: 2017, name: "PINT. AEROSOL x 240cc. GRAFITO LLANTAS", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2018, name: "PINT. AEROSOL x 240cc. GRIS OSCURO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2019, name: "PINT. AEROSOL x 240cc. NEGRO MATE", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2020, name: "PINT. AEROSOL x 240cc. NEGRO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2021, name: "PINT. AEROSOL x 240cc. NARANJA", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2022, name: "PINT. AEROSOL x 240cc. VIOLETA", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2023, name: "PINT. AEROSOL X 240cc. AZUL TRAFUL", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2024, name: "PINT. AEROSOL x 240c.c. NEGRO SATINADO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    ///
    { price: 2449.60, codigo: 2025, name: "PINT. AEROSOL x 240cc. TABACO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2026, name: "PINT. AEROSOL x 240c.c. BLANCO SATINADO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2027, name: "PINT. AEROSOL x 240cc. VERDE INGLES", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2910.40, codigo: 2028, name: "PINT. AERO x 240 cc. FIJ. PROTE. TRANS. (laca)", imagen: images.pinturas.image2028, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 2449.60, codigo: 2029, name: "PINT. AEROSOL x 240cc. BARNIZ TRANSP.", imagen: images.pinturas.image2029, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 3406.40, codigo: 2030, name: "PINT. AEROSOL X 240 cc. CROMADO", imagen: images.pinturas.image2030, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 3764.80, codigo: 2033, name: "PINT. AEROSOL x 240cc. METALIZADO ORO", imagen: images.pinturas.image2030, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 3240.00, codigo: 2034, name: "PINT. AEROSOL x 240cc. METALIZADO PLATA", imagen: images.pinturas.image2030, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 3547.20, codigo: 2035, name: "PINT. AEROSOL x 240cc. ALTA TEMP. ALUMINIO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 3888.00, codigo: 2036, name: "PINT. AEROSOL x 240cc. ALTA TEMP. NEGRO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 6956.80, codigo: 2039, name: "PINT. AEROSOL EPOXI X 440", imagen: images.pinturas.image2039, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 4243.20, codigo: 2043, name: "PINT. AEROSOL FLUOR. x240cc. AMARILLO", imagen: images.pinturas.image2043, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 4243.20, codigo: 2044, name: "PINT. AEROSOL FLUOR. x240cc. NARANJA", imagen: images.pinturas.image2043, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 4243.20, codigo: 2046, name: "PINT. AEROSOL FLUOR. x240cc. ROJO", imagen: images.pinturas.image2043, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 4243.20, codigo: 2047, name: "PINT. AEROSOL FLUOR. x240cc. VERDE", imagen: images.pinturas.image2043, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    ///
    { price: 4243.20, codigo: 2048, name: "PINT.AEROSOL FLUORX 240cc. ROSA", imagen: images.pinturas.image2043, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 5652.80, codigo: 2049, name: "PINT. AEROSOL EFECTO ESMERILADO X 440", imagen: images.pinturas.image2049, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 5664.00, codigo: 2051, name: "ESPUMA DE POLIURETANO EXPANDIDO 293 gs. 300 ml", imagen: images.pinturas.image2051, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 6942.48, codigo: 4500, name: "PINT. AEROSOL X 440 AMARILLO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 6942.48, codigo: 4560, name: "PINT. AEROSOL X 440 BLANCO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 6942.48, codigo: 4562, name: "PINT. AEROSOL X 440 BLANCO MATE", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 6942.48, codigo: 4564, name: "PINT. AEROSOL X 440 BLANCO SATINADO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 6942.48, codigo: 4576, name: "PINT. AEROSOL X 440 NEGRO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 6942.48, codigo: 4578, name: "PINT. AEROSOL X 440 NEGRO MATE", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 6942.48, codigo: 4580, name: "PINT. AEROSOL X 440 NEGRO SATINADO", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 6942.48, codigo: 4596, name: "PINT. AEROSOL X 440 ROJO FURIA", imagen: images.pinturas.image2010, descripcion: 'Descripción del producto', category: subRubroPinturas17},
    { price: 6942.48, codigo: 4600, name: "PINT. AEROSOL X 440 BARNIZ TRANSP. BRILLANTE", imagen: images.pinturas.image2029, descripcion: 'Descripción del producto', category: subRubroPinturas17}
];

module.exports = { listaPinturasEnAerosol, subRubroPinturas17 };