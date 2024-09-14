const subRubroQuimDilu03 = 'Quimicos';

// IMG ------->
const { images } = require('../../assets/assets.js');
// <-------------

const listaQuimicosParaFerreterias = [
    { price: 1989.02, codigo: '0998', name: 'ALCOHOL FINO X 500 cc', imagen: images.quimicos.image998, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 3388.00, codigo: '1000', name: 'ALCOHOL FINO X 1 lt.', imagen: images.quimicos.image998, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 2589.97, codigo: '1001', name: 'ALCOHOL DE QUEMAR x 1 lt.', imagen: images.quimicos.image1001, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 8075.50, codigo: '1002', name: 'CARBURO  DE CALCIO x 120 kg.', imagen: images.noImageDefault, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 8596.50, codigo: '1003', name: 'CARBURO DE CALCIO SUELTO X kg.', imagen: images.noImageDefault, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 10375.63, codigo: '1004', name: 'ALUMBRE DE POTACIO X 1 kg', imagen: images.quimicos.image1004, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 1391.25, codigo: '1005', name: 'SODA CAUSTICA LIQUIDA x 900 cc.', imagen: images.quimicos.image1005, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 1140.00, codigo: '1007', name: 'ACIDO MURIATICO x 1 lt', imagen: images.quimicos.image1007, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 3400.00, codigo: '1008', name: 'ACIDO MURIATICO x 5 lts.', imagen: images.quimicos.image1008, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 1346.40, codigo: '1009', name: 'DESENGRASANTE ALCALINO EN GRANOS X 1 kg.', imagen: images.quimicos.image1009, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 6125.39, codigo: '1010', name: 'DESENGRASANTE ALCALINO LIQUIDO X 1 lt', imagen: images.noImageDefault, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 3899.80, codigo: '1011', name: 'DESOXIDANTE FOSFATIZANTE X 1 lt.', imagen: images.quimicos.image1011, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 3062.04, codigo: '1015', name: 'DESTAPA CAÑERIAS LIQUIDO X 900 cc', imagen: images.quimicos.image1015, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 865.15, codigo: '1040', name: 'SELLADOR DE POLIPROPILENO X 25 cc.', imagen: images.quimicos.image1040, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 4868.98, codigo: '1042', name: 'SELLADOR DE SILICONA PAR FISURAS X 280BL', imagen: images.noImageDefault, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 7488.00, codigo: '1045', name: 'SELLADOR PARA CAÑOS DE GAS X 15 grs.', imagen: images.noImageDefault, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 13311.00, codigo: '1046', name: 'SELLADOR PARA CAÑOS DE GAS X 50 grs.', imagen: images.quimicos.image1046, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 1870.00, codigo: '1048', name: 'ADHESIVO DE CONTACTO X 125 cc.', imagen: images.quimicos.image1048, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 2420.80, codigo: '1050', name: 'ADHESIVO PVC X 100 C. C.', imagen: images.quimicos.image1050, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 1172.80, codigo: '1056', name: 'LITARGIRIO X 100 grs.', imagen: images.quimicos.image1056, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 544.00, codigo: '1060', name: 'GLICERINA PURA X 100 grs', imagen: images.quimicos.image1060, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 646.40, codigo: '1066', name: 'CAÑAMO PEINODO FINO X 20 grs.', imagen: images.quimicos.image1066, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 953.60, codigo: '1068', name: 'GRASA DE LITIO X 125 grs.', imagen: images.quimicos.image1068, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 560.00, codigo: '1070', name: 'GRASA GRAFITADA X 40 grs.', imagen: images.quimicos.image1070, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 680.00, codigo: '1075', name: 'DECAPANTE X 70 GS.', imagen: images.quimicos.image1075, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 7400.61, codigo: '1076', name: 'FUNDENTE DE PLATA X 100 grs.', imagen: images.quimicos.image1076, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 533.34, codigo: '1080', name: 'MASILLA PARA VIDRIOS Y SANITARIOS X 500 grs.', imagen: images.quimicos.image1080, descripcion: 'Descripción del producto', category: subRubroQuimDilu03 },
    { price: 800.08, codigo: '1081', name: 'MASILLA PARA VIDRIOS Y SANITARIOS X 1 kg', imagen: images.quimicos.image1081, descripcion: 'Descripción del producto', category: subRubroQuimDilu03}
];

module.exports = { listaQuimicosParaFerreterias, subRubroQuimDilu03 };