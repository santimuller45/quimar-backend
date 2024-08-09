require('dotenv').config();
const { DB_HOST, PORT } = process.env;

const subRubroQuimDilu01 = 'Aceites';

// IMG ---------->
const imageURL = 'URL';
const imageLino900cc = `http://${DB_HOST}:${PORT}/assets/img/aceites/aceitelino.png`;
const imageLino5lt = `http://${DB_HOST}:${PORT}/assets/img/aceites/aceitelino5lt.png`;
// <--------------

const listaAceiteDeLinoYAceiteLubricante = [
    {
        price: 2994.54, 
        codigo: '1150', 
        name: 'ACEITE DE LINO X 900 cc', 
        imagen: imageLino900cc, 
        descripcion: 'Descripción del producto', 
        category: subRubroQuimDilu01 
    },
    { 
        price: 15218.04, 
        codigo: '1151', 
        name: 'ACEITE DE LINO X 5 lts', 
        imagen: imageLino5lt, 
        descripcion: 'Descripción del producto', 
        category: subRubroQuimDilu01 
    },
    { 
        price: 483021.00, 
        codigo: '1152', 
        name: 'ACEITE DE LINO X 200 lts', 
        imagen: imageURL, 
        descripcion: 'Descripción del producto', 
        category: subRubroQuimDilu01 
    }
];

module.exports = { listaAceiteDeLinoYAceiteLubricante, subRubroQuimDilu01 };