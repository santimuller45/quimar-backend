const subRubro = 'Pintura en aerosol';
const imageURL = 'URL';

const listaPinturasEnAerosol = [
    { price: 2449.60, codigo: 2010, name: "PINT. AEROSOL x 240cc. AMARILLO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2011, name: "PINT. AEROSOL x 240cc. ANTIOXIDO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2012, name: "PINT. AEROSOL x 240cc. AZUL MARINO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2013, name: "PINT. AEROSOL x 240cc. BERMELLON", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2014, name: "PINT. AEROSOL x 240cc. BLANCO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2015, name: "PINT. AEROSOL x 240cc. BLANCO MATE", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2016, name: "PINT. AEROSOL x 240cc. CELESTE", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 3241.60, codigo: 2017, name: "PINT. AEROSOL x 240cc. GRAFITO LLANTAS", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2018, name: "PINT. AEROSOL x 240cc. GRIS OSCURO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2019, name: "PINT. AEROSOL x 240cc. NEGRO MATE", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2020, name: "PINT. AEROSOL x 240cc. NEGRO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2021, name: "PINT. AEROSOL x 240cc. NARANJA", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2022, name: "PINT. AEROSOL x 240cc. VIOLETA", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2023, name: "PINT. AEROSOL X 240cc. AZUL TRAFUL", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2024, name: "PINT. AEROSOL x 240c.c. NEGRO SATINADO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    ///
    { price: 2449.60, codigo: 2025, name: "PINT. AEROSOL x 240cc. TABACO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2026, name: "PINT. AEROSOL x 240c.c. BLANCO SATINADO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2027, name: "PINT. AEROSOL x 240cc. VERDE INGLES", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2910.40, codigo: 2028, name: "PINT. AERO x 240 cc. FIJ. PROTE. TRANS. (laca)", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 2449.60, codigo: 2029, name: "PINT. AEROSOL x 240cc. BARNIZ TRANSP.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 3406.40, codigo: 2030, name: "PINT. AEROSOL X 240 cc. CROMADO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 3764.80, codigo: 2033, name: "PINT. AEROSOL x 240cc. METALIZADO ORO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 3240.00, codigo: 2034, name: "PINT. AEROSOL x 240cc. METALIZADO PLATA", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 3547.20, codigo: 2035, name: "PINT. AEROSOL x 240cc. ALTA TEMP. ALUMINIO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 3888.00, codigo: 2036, name: "PINT. AEROSOL x 240cc. ALTA TEMP. NEGRO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6956.80, codigo: 2039, name: "PINT. AEROSOL EPOXI X 440", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 4243.20, codigo: 2043, name: "PINT. AEROSOL FLUOR. x240cc. AMARILLO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 4243.20, codigo: 2044, name: "PINT. AEROSOL FLUOR. x240cc. NARANJA", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 4243.20, codigo: 2046, name: "PINT. AEROSOL FLUOR. x240cc. ROJO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 4243.20, codigo: 2047, name: "PINT. AEROSOL FLUOR. x240cc. VERDE", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    ///
    { price: 4243.20, codigo: 2048, name: "PINT.AEROSOL FLUORX 240cc. ROSA", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 5652.80, codigo: 2049, name: "PINT. AEROSOL EFECTO ESMERILADO X 440", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 5664.00, codigo: 2051, name: "ESPUMA DE POLIURETANO EXPANDIDO 293 gs. 300 ml", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6942.48, codigo: 4500, name: "PINT. AEROSOL X 440 AMARILLO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6942.48, codigo: 4560, name: "PINT. AEROSOL X 440 BLANCO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6942.48, codigo: 4562, name: "PINT. AEROSOL X 440 BLANCO MATE", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6942.48, codigo: 4564, name: "PINT. AEROSOL X 440 BLANCO SATINADO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6942.48, codigo: 4576, name: "PINT. AEROSOL X 440 NEGRO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6942.48, codigo: 4578, name: "PINT. AEROSOL X 440 NEGRO MATE", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6942.48, codigo: 4580, name: "PINT. AEROSOL X 440 NEGRO SATINADO", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6942.48, codigo: 4596, name: "PINT. AEROSOL X 440 ROJO FURIA", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6942.48, codigo: 4600, name: "PINT. AEROSOL X 440 BARNIZ TRANSP. BRILLANTE", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro}
];

module.exports = listaPinturasEnAerosol;