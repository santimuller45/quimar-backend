const url = 'imagen';

const listaQuimicosParaFerreterias = [
    { price: 1989.02, codigo: '0998', name: 'ALCOHOL FINO X 500 cc', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3388.00, codigo: '1000', name: 'ALCOHOL FINO X 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2589.97, codigo: '1001', name: 'ALCOHOL DE QUEMAR x 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 8075.50, codigo: '1002', name: 'CARBURO  DE CALCIO x 120 kg.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 8596.50, codigo: '1003', name: 'CARBURO DE CALCIO SUELTO X kg.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 10375.63, codigo: '1004', name: 'ALUMBRE DE POTACIO X 1 kg', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 1391.25, codigo: '1005', name: 'SODA CAUSTICA LIQUIDA x 900 cc.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 1140.00, codigo: '1007', name: 'ACIDO MURIATICO x 1 lt', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3400.00, codigo: '1008', name: 'ACIDO MURIATICO x 5 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 1346.40, codigo: '1009', name: 'DESENGRASANTE ALCALINO EN GRANOS X 1 kg.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 6125.39, codigo: '1010', name: 'DESENGRASANTE ALCALINO LIQUIDO X 1 lt', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3899.80, codigo: '1011', name: 'DESOXIDANTE FOSFATIZANTE X 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3062.04, codigo: '1015', name: 'DESTAPA CAÑERIAS LIQUIDO X 900 cc', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 865.15, codigo: '1040', name: 'SELLADOR DE POLIPROPILENO X 25 cc.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 4868.98, codigo: '1042', name: 'SELLADOR DE SILICONA PAR FISURAS X 280BL', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 7488.00, codigo: '1045', name: 'SELLADOR PARA CAÑOS DE GAS X 15 grs.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 13311.00, codigo: '1046', name: 'SELLADOR PARA CAÑOS DE GAS X 50 grs.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 1870.00, codigo: '1048', name: 'ADHESIVO DE CONTACTO X 125 cc.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2420.80, codigo: '1050', name: 'ADHESIVO PVC X 100 C. C.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 1172.80, codigo: '1056', name: 'LITARGIRIO X 100 grs.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 544.00, codigo: '1060', name: 'GLICERINA PURA X 100 grs', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 646.40, codigo: '1066', name: 'CAÑAMO PEINODO FINO X 20 grs.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 953.60, codigo: '1068', name: 'GRASA DE LITIO X 125 grs.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 560.00, codigo: '1070', name: 'GRASA GRAFITADA X 40 grs.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 680.00, codigo: '1075', name: 'DECAPANTE X 70 GS.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 7400.61, codigo: '1076', name: 'FUNDENTE DE PLATA X 100 grs.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 533.34, codigo: '1080', name: 'MASILLA PARA VIDRIOS Y SANITARIOS X 500 grs.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 800.08, codigo: '1081', name: 'MASILLA PARA VIDRIOS Y SANITARIOS X 1 kg', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaDiluyentes = [
    { price: 1675.35, codigo: '1120', name: 'AGUARRAS MINERAL x 900 cc.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 8704.17, codigo: '1121', name: 'AGUARRAS MINERAL x 5 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 295596.00, codigo: '1122', name: 'AGUARRAS MINERAL x 200 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 5188.23, codigo: '1124', name: 'SOLVENTE INDUSTRIAL  x 900 cc', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 24945.12, codigo: '1125', name: 'SOLVENTE INDUSTRIAL x 5 LT.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2240.00, codigo: '1128', name: 'THINNER PARA LIMPIEZA X 800 cc.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2268.00, codigo: '1129', name: 'THINNER X 500 cc.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3393.60, codigo: '1130', name: 'THINNER x 900 cc.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 17377.60, codigo: '1131', name: 'THINNER x 5 lts', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 618120.00, codigo: '1133', name: 'THINNER x 200lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 4151.35, codigo: '1134', name: 'THINNER SELLO DE ORO x 900 cc.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 21705.75, codigo: '1135', name: 'THINNER SELLO DE ORO x 5 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 668304.00, codigo: '1137', name: 'THINNER SELLO DE ORO x 200 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 1969.60, codigo: '1140', name: 'KEROSENE x 900 cc.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 10808.00, codigo: '1141', name: 'KEROSENE x 5 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 43635.60, codigo: '1144', name: 'REMOVEDOR GEL x 4 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 7129.80, codigo: '1146', name: 'REMOVEDOR EN GEL X 1/2 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 10404.00, codigo: '1148', name: 'REMOVEDOR EN GEL X 1 lt', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' }
];

const listaAceiteDeLinoYAceiteLubricante = [
    { price: 2994.54, codigo: '1150', name: 'ACEITE DE LINO X 900 cc', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 15218.04, codigo: '1151', name: 'ACEITE DE LINO X 5 lts', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 483021.00, codigo: '1152', name: 'ACEITE DE LINO X 200 lts', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' }
];

const listaConvertidorYAntioxidosParaSuperficies = [
    { price: 2821.38, codigo: '1250', name: 'CONVERTIDOR DE OXIDO BLANCO X 1/4 lt', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 4307.87, codigo: '1251', name: 'CONVERTIDOR DE OXIDO BLANCO X 1/2 lt', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 6926.54, codigo: '1252', name: 'CONVERTIDOR DE OXIDO BLANCO X 1 lt', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2532.47, codigo: '1260', name: 'CONVERTIDOR DE OXIDO AL CROMATO BLANCO x 1/4 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3782.16, codigo: '1261', name: 'CONVERTIDOR DE OXIDO AL CROMATO BLANCO x 1/2lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 5949.02, codigo: '1262', name: 'CONVERTIDOR DE OXIDO AL CROMATO BLANCO x 1lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 20587.56, codigo: '1263', name: 'CONVERTIDOR DE OXIDO AL CROMATO BLANCO x 4lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 104110.85, codigo: '1264', name: 'CONVERTIDOR DE OXIDO BLANCO x 20lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2697.94, codigo: '1265', name: 'CONVERTIDOR DE OXIDO NEGRO x 1/4 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 4119.40, codigo: '1266', name: 'CONVERTIDOR DE OXIDO NEGRO x 1/2 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 6623.51, codigo: '1267', name: 'CONVERTIDOR DE OXIDO NEGRO x 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 23285.50, codigo: '1268', name: 'CONVERTIDOR DE OXIDO NEGRO x 4 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 108880.69, codigo: '1269', name: 'CONVERTIDOR DE OXIDO NEGRO x 20 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3277.70, codigo: '1270', name: 'CONVERTIDOR DE OXIDO GRIS x 1/4 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3563.61, codigo: '1271', name: 'CONVERTIDOR DE OXIDO GRIS x 1/2 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 8494.18, codigo: '1272', name: 'CONVERTIDOR DE OXIDO GRIS x 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 28696.76, codigo: '1273', name: 'CONVERTIDOR DE OXIDO GRIS x 4lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 136423.06, codigo: '1274', name: 'CONVERTIDOR DE OXIDO GRIS x 20 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 8092.66, codigo: '1287', name: 'ANTIOXIDO AL CROMATO GRIS  x 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 28696.76, codigo: '1288', name: 'ANTIOXIDO AL CROMATO GRIS x 4 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 104110.85, codigo: '1289', name: 'ANTIOXIDO AL CROMATO GRIS x 20 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 90106.72, codigo: '1299', name: 'Antioxido al Cromato gris 020 x 20 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2532.47, codigo: '1300', name: 'Antioxido al Cromato negro x 1/4 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3782.16, codigo: '1301', name: 'Antioxido al Cromato negro x 1/2 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 5949.02, codigo: '1302', name: 'Antioxido al Cromato negro x 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 20587.56, codigo: '1303', name: 'Antioxido al Cromato negro x 4 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 106177.93, codigo: '1304', name: 'Antioxido al Cromato negro x 20 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 1058.84, codigo: '1311', name: 'Antioxido al cromato rojo x 1/4 l.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3240.05, codigo: '1312', name: 'Antioxido al cromato rojo x 1/2 l.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 5328.99, codigo: '1313', name: 'Antioxido al cromato rojo x 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 18451.80, codigo: '1314', name: 'Antioxido al Cromato rojo x 4 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 40771.52, codigo: '1315', name: 'Antioxido al cromato rojo x 10 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' }
];

const listaFondosYFijadoresDeSuperficies = [
    { price: 3265.26, codigo: '1392', name: 'FIJADOR SELLADOR AL AGUA CONCENTRADO x 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 11329.15, codigo: '1393', name: 'FIJADOR SELLADOR AL AGUA CONCENTRADO x 4 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 22371.48, codigo: '1394', name: 'FIJADOR SELLADOR AL AGUA CONCENTRADO x 10 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 5214.65, codigo: '1396', name: 'FIJADOR AL AGUARRAS x 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 17599.65, codigo: '1397', name: 'FIJADOR AL AGUARRAS x 4 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3366.12, codigo: '1399', name: 'FONDO BLANCO PARA MADERAS x 1/2 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 4965.66, codigo: '1400', name: 'FONDO BLANCO PARA MADERAS x 1 lt.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 16917.29, codigo: '1401', name: 'FONDO BLANCO PARA MADERAS x 4 lts.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 1713.00, codigo: '1403', name: 'ENDUIDO INTERIOR x 1/2', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2991.06, codigo: '1404', name: 'ENDUIDO INTERIOR x 1', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 10210.26, codigo: '1405', name: 'ENDUIDO INTERIOR x 4', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 19282.71, codigo: '1406', name: 'ENDUIDO INTERIOR x 10', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 3348.79, codigo: '1408', name: 'ENDUIDO EXTERIOR x 1', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 11623.84, codigo: '1409', name: 'ENDUIDO EXTERIOR x 4', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 22828.49, codigo: '1410', name: 'ENDUIDO EXTERIOR x 10', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 1936.78, codigo: '1412', name: 'ENDUIDO EXTERIOR  X 1/2', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 1483.20, codigo: '1414', name: 'MASILLA PARA DURLOCK X 1.80 KG.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 6560.00, codigo: '1415', name: 'MASILLA PARA DURLOCK X 7 KG.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 13600.00, codigo: '1416', name: 'MASILLA PARA DURLOCK X 14 KG.', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 8200.98, codigo: '1420', name: 'LADRI. Y TEJAS ANTIHUMEDAD X 1 NATURAL', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 28982.38, codigo: '1421', name: 'LADRI. Y TEJAS ANTIHUMEDAD X 4 NATURAL', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 8308.19, codigo: '1423', name: 'LADRI. Y TEJAS ANTIHUMEDAD X 1 CERAMICO', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 29361.23, codigo: '1424', name: 'LADRI. Y TEJAS ANTIHUMEDAD X 4 CERAMICO', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' }
];

const listaEntonadorUniversal = [
    { price: 809.43, codigo: '1450', name: 'ENTONADOR UNIVERSAL x30 cc. amarillo', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.43, codigo: '1451', name: 'ENTONADOR UNIVERSAL x30 cc. azul', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.43, codigo: '1452', name: 'ENTONADOR UNIVERSAL x30 cc. bermellon', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.43, codigo: '1453', name: 'ENTONADOR UNIVERSAL x30 cc. cedro', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.43, codigo: '1454', name: 'ENTONADOR UNIVERSAL x30 cc. ocre', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.43, codigo: '1455', name: 'ENTONADOR UNIVERSAL x30 cc. marron', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.43, codigo: '1456', name: 'ENTONADOR UNIVERSAL x30 cc. naranja', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.43, codigo: '1457', name: 'ENTONADOR UNIVERSAL x30 cc. negro', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.43, codigo: '1458', name: 'ENTONADOR UNIVERSAL x30 cc. siena', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.48, codigo: '1459', name: 'ENTONADOR UNIVERSAL x30 cc. violeta', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.43, codigo: '1460', name: 'ENTONADOR UNIVERSAL x30 cc. verde claro', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 809.43, codigo: '1461', name: 'ENTONADOR UNIVERSAL x30 cc. verde oscuro', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1462', name: 'ENTONADOR UNIVERSAL x120cc. amarillo', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1463', name: 'ENTONADOR UNIVERSAL x120cc. azul', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1464', name: 'ENTONADOR UNIVERSAL x120cc. bermellon', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1465', name: 'ENTONADOR UNIVERSAL x120cc. cedro', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1466', name: 'ENTONADOR UNIVERSAL x120cc. ocre', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1467', name: 'ENTONADOR UNIVERSAL x120cc. marron', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1468', name: 'ENTONADOR UNIVERSAL x120cc. naranja', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1469', name: 'ENTONADOR UNIVERSAL x120cc. negro', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1470', name: 'ENTONADOR UNIVERSAL x120cc. siena', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1471', name: 'ENTONADOR UNIVERSAL x120cc. violeta', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1472', name: 'ENTONADOR UNIVERSAL x120cc. verde claro', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' },
    { price: 2163.26, codigo: '1473', name: 'ENTONADOR  UNIVERSAL x120 cc. verde oscuro', imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto' }
];

const listaEsmalteSinteticoNetcolor = [
    /// BLANCO
    { price: 2967.33, codigo: 1500, name: "ESMALTE SINTETICO BLANCO x1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4874.17, codigo: 1501, name: "ESMALTE SINTETICO BLANCO x1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 7134.10, codigo: 1502, name: "ESMALTE SINTETICO BLANCO x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 25805.83, codigo: 1503, name: "ESMALTE SINTETICO BLANCO x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 170055.58, codigo: 1504, name: "ESMALTE SINTETICO BLANCO x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// BERMELLON
    { price: 2751.52, codigo: 1505, name: "ESMALTE SINTETICO BERMELLON x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4519.68, codigo: 1506, name: "ESMALTE SINTETICO BERMELLON x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 7134.10, codigo: 1507, name: "ESMALTE SINTETICO BERMELLON x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 25472.85, codigo: 1508, name: "ESMALTE SINTETICO BERMELLON x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 170055.58, codigo: 1509, name: "ESMALTE SINTETICO BERMELLON x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// NARANJA
    { price: 2751.52, codigo: 1510, name: "ESMALTE SINTETICO NARANJA x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4519.68, codigo: 1511, name: "ESMALTE SINTETICO NARANJA x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 7134.10, codigo: 1512, name: "ESMALTE SINTETICO NARANJA x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 25472.85, codigo: 1513, name: "ESMALTE SINTETICO NARANJA x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 170055.58, codigo: 1514, name: "ESMALTE SINTETICO NARANJA x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// AMARILLO
    { price: 2751.52, codigo: 1515, name: "ESMALTE SINTETICO AMARILLO x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4519.68, codigo: 1516, name: "ESMALTE SINTETICO AMARILLO x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 7134.10, codigo: 1517, name: "ESMALTE SINTETICO AMARILLO x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 25472.85, codigo: 1518, name: "ESMALTE SINTETICO AMARILLO x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 170055.58, codigo: 1519, name: "ESMALTE SINTETICO AMARILLO x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// ALUMINIO
    { price: 2751.52, codigo: 1520, name: "ESMALTE SINTETICO ALUMINIO x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4519.68, codigo: 1521, name: "ESMALTE SINTETICO ALUMINIO x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 7134.10, codigo: 1522, name: "ESMALTE SINTETICO ALUMINIO x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 25472.85, codigo: 1523, name: "ESMALTE SINTETICO ALUMINIO x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 173740.07, codigo: 1524, name: "ESMALTE SINTETICO ALUMINIO x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// AMARILLO MED
    { price: 3573.47, codigo: 1525, name: "ESMALTE SINTETICO AMARILLO MED. x1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5877.91, codigo: 1526, name: "ESMALTE SINTETICO AMARILLO MED. x1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9278.47, codigo: 1527, name: "ESMALTE SINTETICO AMARILLO MED. x1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 33120.40, codigo: 1528, name: "ESMALTE SINTETICO AMARILLO MED. x4l ts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 170055.58, codigo: 1529, name: "ESMALTE SINTETICO AMARILLO MED. x20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// VERDE INGLES
    { price: 170055.58, codigo: 1544, name: "ESMALTE SINTETICO VERDE INGLES x20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2660.12, codigo: 1550, name: "ESMALTE SINTETICO VERDE INGLES x1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4081.58, codigo: 1551, name: "ESMALTE SINTETICO VERDE INGLES x1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6503.74, codigo: 1552, name: "ESMALTE SINTETICO VERDE INGLES x1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 22970.32, codigo: 1553, name: "ESMALTE SINTETICO VERDE INGLES x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// VERDE NOCHE
    { price: 3595.48, codigo: 1555, name: "ESMALTE SINTETICO VERDE NOCHE x1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5877.91, codigo: 1556, name: "ESMALTE SINTETICO VERDE NOCHE x1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9278.47, codigo: 1557, name: "ESMALTE SINTETICO VERDE NOCHE x1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 33120.40, codigo: 1558, name: "ESMALTE SINTETICO VERDE NOCHE x4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 170055.58, codigo: 1559, name: "ESMALTE SINTETICO VERDE NOCHE x20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// GRIS 020
    { price: 2660.12, codigo: 1585, name: "ESMALTE SINTETICO GRIS 020 x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4081.58, codigo: 1586, name: "ESMALTE SINTETICO GRIS 020 x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6503.74, codigo: 1587, name: "ESMALTE SINTETICO GRIS 020 x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 22970.32, codigo: 1588, name: "ESMALTE SINTETICO GRIS 020 x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1589, name: "ESMALTE SINTETICO GRIS 020 x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// GRIS HIELO
    { price: 2535.62, codigo: 1590, name: "ESMALTE SINTETICO GRIS HIELO x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3886.17, codigo: 1591, name: "ESMALTE SINTETICO GRIS HIELO x1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6194.86, codigo: 1592, name: "ESMALTE SINTETICO GRIS HIELO x1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 21882.95, codigo: 1593, name: "ESMALTE SINTETICO GRIS HIELO x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1594, name: "ESMALTE SINTETICO GRIS HIELO x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// GRIS ESPACIAL
    { price: 2660.12, codigo: 1595, name: "ESMALTE SINTETICO GRIS ESPACIAL x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4081.58, codigo: 1596, name: "ESMALTE SINTETICO GRIS ESPACIAL x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6503.74, codigo: 1597, name: "ESMALTE SINTETICO GRIS ESPACIAL x1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 22970.32, codigo: 1598, name: "ESMALTE SINTETICO GRIS ESPACIAL x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1599, name: "ESMALTE SINTETICO GRIS ESPACIAL x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// AZUL MARINO
    { price: 2660.12, codigo: 1600, name: "ESMALTE SINTETICO AZUL MARINO x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4081.58, codigo: 1601, name: "ESMALTE SINTETICO AZUL MARINO x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6503.74, codigo: 1602, name: "ESMALTE SINTETICO AZUL MARINO x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 22970.32, codigo: 1603, name: "ESMALTE SINTETICO AZUL MARINO x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1604, name: "ESMALTE SINTETICO AZUL MARINO x20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// AZUL TRAFUL
    { price: 2535.62, codigo: 1605, name: "ESMALTE SINTETICO AZUL TRAFUL x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3886.17, codigo: 1606, name: "ESMALTE SINTETICO AZUL TRAFUL x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6194.86, codigo: 1607, name: "ESMALTE SINTETICO AZUL TRAFUL x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 21882.95, codigo: 1608, name: "ESMALTE SINTETICO AZUL TRAFUL x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1609, name: "ESMALTE SINTETICO AZUL TRAFUL x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// AZULEJO
    { price: 2535.62, codigo: 1610, name: "ESMALTE SINTETICO AZULEJO x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3886.17, codigo: 1611, name: "ESMALTE SINTETICO AZULEJO x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 616.18, codigo: 1612, name: "ESMALTE SINTETICO AZULEJO x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 21882.95, codigo: 1613, name: "ESMALTE SINTETICO AZULEJO x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1614, name: "ESMALTE SINTETICO AZULEJO x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// NEGRO
    { price: 2535.62, codigo: 1630, name: "ESMALTE SINTETICO NEGRO  x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3886.17, codigo: 1631, name: "ESMALTE SINTETICO NEGRO x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6194.86, codigo: 1632, name: "ESMALTE SINTETICO NEGRO x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 21882.95, codigo: 1633, name: "ESMALTE SINTETICO NEGRO x 4 lts", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 140821.06, codigo: 1634, name: "ESMALTE SINTETICO NEGRO x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// CELESTE
    { price: 2535.62, codigo: 1650, name: "ESMALTE SINTETICO CELESTE x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3886.17, codigo: 1651, name: "ESMALTE SINTETICO CELESTE x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6194.86, codigo: 1652, name: "ESMALTE SINTETICO CELESTE x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 21882.95, codigo: 1653, name: "ESMALTE SINTETICO CELESTE x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1654, name: "ESMALTE SINTETICO CELESTE x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// GRIS PERLA
    { price: 2660.12, codigo: 1655, name: "ESMALTE SINTETICO GRIS PERLA x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4081.58, codigo: 1656, name: "ESMALTE SINTETICO GRIS PERLA x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6503.74, codigo: 1657, name: "ESMALTE SINTETICO GRIS PERLA x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 22970.32, codigo: 1658, name: "ESMALTE SINTETICO GRIS PERLA x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1659, name: "ESMALTE SINTETICO GRIS PERLA x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// TABACO
    { price: 2660.12, codigo: 1670, name: "ESMALTE SINTETICO TABACO x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4081.58, codigo: 1671, name: "ESMALTE SINTETICO TABACO x 1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6503.74, codigo: 1672, name: "ESMALTE SINTETICO TABACO x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 22970.32, codigo: 1673, name: "ESMALTE SINTETICO TABACO x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1674, name: "ESMALTE SINTETICO TABACO x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// MARRON
    { price: 2535.62, codigo: 1680, name: "ESMALTE SINTETICO MARRON x 1/4l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3886.17, codigo: 1681, name: "ESMALTE SINTETICO MARRON x 1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6194.86, codigo: 1682, name: "ESMALTE SINTETICO MARRON x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 21882.95, codigo: 1683, name: "ESMALTE SINTETICO MARRON x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1684, name: "ESMALTE SINTETICO MARRON x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// VIOLETA
    { price: 3615.62, codigo: 1690, name: "ESMALTE SINTETICO VIOLETA x 1/4l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6140.62, codigo: 1691, name: "ESMALTE SINTETICO VIOLETA x 1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 11077.09, codigo: 1692, name: "ESMALTE SINTETICO VIOLETA x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 33120.40, codigo: 1693, name: "ESMALTE SINTETICO VIOLETA X 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaConvertidorConEsmalteNetcolor = [
    /// BLANCO
    { price: 3675.00, codigo: 1700, name: "CONVERTIDOR + ESMALTE BLANCO x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5874.96, codigo: 1701, name: "CONVERTIDOR + ESMALTE BLANCO x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9261.56, codigo: 1702, name: "CONVERTIDOR + ESMALTE BLANCO x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 33120.69, codigo: 1703, name: "CONVERTIDOR + ESMALTE BLANCO x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 173848.85, codigo: 1704, name: "CONVERTIDOR + ESMALTE BLANCO x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// NEGRO
    { price: 3473.28, codigo: 1720, name: "CONVERTIDOR + ESMALTE NEGRO x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5299.75, codigo: 1721, name: "CONVERTIDOR + ESMALTE NEGRO x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 8457.86, codigo: 1722, name: "CONVERTIDOR + ESMALTE NEGRO x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 29863.31, codigo: 1723, name: "CONVERTIDOR + ESMALTE NEGRO x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 164596.04, codigo: 1724, name: "CONVERTIDOR + ESMALTE NEGRO x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// VERDE INGLES
    { price: 4305.33, codigo: 1725, name: "CONVERTIDOR + ESMALTE VERDE INGLES x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6140.62, codigo: 1726, name: "CONVERTIDOR + ESMALTE VERDE INGLES x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9929.85, codigo: 1727, name: "CONVERTIDOR + ESMALTE VERDE INGLES x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 37248.94, codigo: 1728, name: "CONVERTIDOR + ESMALTE VERDE INGLES x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 160987.64, codigo: 1729, name: "CONVERTIDOR + ESMALTE VERDE INGLES x 20 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// GRIS 020
    { price: 4305.33, codigo: 1730, name: "CONVERTIDOR + ESMALTE GRIS 020 x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6140.62, codigo: 1731, name: "CONVERTIDOR + ESMALTE GRIS 020 x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9929.85, codigo: 1732, name: "CONVERTIDOR+ESMALTE GRIS 020 x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 37248.94, codigo: 1733, name: "CONVERTIDOR+ESMALTE GRIS 020 x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 160987.64, codigo: 1734, name: "CONVERTIDOR+ESMALTE GRIS 020 x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// AZUL MARINO
    { price: 4305.33, codigo: 1735, name: "CONVERTIDOR+ESMALTE AZUL MARINO x 1/4l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6140.62, codigo: 1736, name: "CONVERTIDOR+ESMALTE AZUL MARINO x 1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9929.85, codigo: 1737, name: "CONVERTIDOR+ESMALTE AZUL MARINO x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 37248.94, codigo: 1738, name: "CONVERTIDOR+ESMALTE AZUL MARINO x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 160987.64, codigo: 1739, name: "CONVERTIDOR+ESMALTE AZUL MARINO x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// MARRON
    { price: 4305.33, codigo: 1740, name: "CONVERTIDOR+ESMALTE MARRON x 1/4l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6140.62, codigo: 1741, name: "CONVERTIDOR+ESMALTE MARRON x 1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 37248.94, codigo: 1742, name: "CONVERTIDOR+ESMALTE MARRON x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 37248.94, codigo: 1743, name: "CONVERTIDOR+ESMALTE MARRON x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 160987.64, codigo: 1744, name: "CONVERTIDOR+ESMALTE MARRON x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaEsmalteSatinadoNetcolor = [
    { price: 2814.56, codigo: 1750, name: "ESMALTE SATINADO BLANCO x 1/4l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4341.60, codigo: 1751, name: "ESMALTE SATINADO BLANCO x 1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 7069.49, codigo: 1752, name: "ESMALTE SATINADO BLANCO x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 25099.36, codigo: 1753, name: "ESMALTE SATINADO BLANCO x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 199154.21, codigo: 1754, name: "ESMALTE SATINADO BLANCO x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2466.28, codigo: 1755, name: "ESMALTE SATINADO NEGRO x 1/4l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3648.21, codigo: 1756, name: "ESMALTE SATINADO NEGRO x 1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5677.97, codigo: 1757, name: "ESMALTE SATINADO NEGRO x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 19539.58, codigo: 1758, name: "ESMALTE SATINADO NEGRO x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaEsmalteSinteticoMateNetcolor = [
    { price: 2439.49, codigo: 1760, name: "SINTETICO BLANCO MATE x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3643.48, codigo: 1761, name: "SINTETICO BLANCO MATE x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5655.91, codigo: 1762, name: "SINTETICO BLANCO MATE x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 24480.00, codigo: 1763, name: "SINTETICO BLANCO MATE x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2439.49, codigo: 1765, name: "SINTETICO NEGRO MATE x 1/4 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3643.48, codigo: 1766, name: "SINTETICO NEGRO MATE x 1/2 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5655.91, codigo: 1767, name: "SINTETICO NEGRO MATE x 1 lt.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 19413.51, codigo: 1768, name: "SINTETICO NEGRO MATE x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaBarnizMarinoNetcolor = [
    /// BRILLANTE
    { price: 2541.93, codigo: 1780, name: "BARNIZ MARINO BRILLANTE Ext./Int. x 1/4l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3799.49, codigo: 1781, name: "BARNIZ MARINO BRILLANTE Ext./Int. x 1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5960.05, codigo: 1782, name: "BARNIZ MARINO BRILLANTE Ext./Int. x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 20634.83, codigo: 1783, name: "BARNIZ MARINO BRILLANTE Ext./Int. x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 130762.35, codigo: 1784, name: "BARNIZ MARINO BRILLANTE Ext./Int. x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    ///SATINADO
    { price: 2554.53, codigo: 1785, name: "BARNIZ MARINO SATINADO Ext./Int. x 1/4l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3801.07, codigo: 1786, name: "BARNIZ MARINO SATINADO Ext./Int. x 1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5990.00, codigo: 1787, name: "BARNIZ MARINO SATINADO Ext./Int. x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 20735.69, codigo: 1788, name: "BARNIZ MARINO SATINADO Ext./Int. x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 102534.98, codigo: 1789, name: "BARNIZ MARINO SATINADO Ext./Int. x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// MATE
    { price: 2598.66, codigo: 1790, name: "BARNIZ MARINO MATE Ext./Int. x 1/4l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3914.54, codigo: 1791, name: "BARNIZ MARINO MATE Ext./Int. x 1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6196.44, codigo: 1792, name: "BARNIZ MARINO MATE Ext./Int. x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 21599.29, codigo: 1793, name: "BARNIZ MARINO MATE Ext./Int. x 4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 130757.55, codigo: 1794, name: "BARNIZ MARINO MATE Ext./Int. x 20lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// C/FILTRO UV
    { price: 3326.43, codigo: 1795, name: "BARNIZ MARINO c/filtro UV Ext./Int. x1/4l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4960.46, codigo: 1796, name: "BARNIZ MARINO c/filtro UV Ext./Int. x1/2l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 7788.34, codigo: 1797, name: "BARNIZ MARINO c/filtro UV Ext./Int. x1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 26946.64, codigo: 1798, name: "BARNIZ MARINO c/filtro UV Ext./Int. x4lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// LASUR
    { price: 9639.00, codigo: 1900, name: "LASUR PARA MADERAS VENIER NATURAL X 1 LT.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 38250.00, codigo: 1901, name: "LASUR PARA MADERAS VENIER NATURAL X 4 LTS.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9639.00, codigo: 1903, name: "LASUR PARA MADERAS VENIER CRISTAL X1", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 38250.00, codigo: 1904, name: "LASUR PARA MADERAS VENIER CRISTAL X 4", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9639.00, codigo: 1905, name: "LASUR PARA MADERAS VENIER CEDRO X 1 LT.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 38250.00, codigo: 1906, name: "LASUR PARA MADERAS VENIER CEDRO X 4 LTS.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9639.00, codigo: 1910, name: "LASUR PARA MADERAS VENIER ROBLE OSCURO X 1 LT.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 38250.00, codigo: 1911, name: "LASUR PARA MADERAS VENIER ROBLE OSCURO X 4 LTS.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 38250.00, codigo: 1912, name: "LASUR PARA MADERAS VENIER CAOBA X 4 LTS.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9639.00, codigo: 1913, name: "LASUR PARA MADERAS VENIER CAOBA X 1 LT", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 9639.00, codigo: 1914, name: "LASUR PARA MADERAS VENIER NOGAL X 1 LT", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 38250.00, codigo: 1915, name: "LASUR PARA MADERAS VENIER NOGAL X 4 LTS.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// SIMIL MADERA
    { price: 29280.00, codigo: 1920, name: "SIMIL MADERA CAOBA X 750 cc", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 29280.00, codigo: 1921, name: "SIMIL MADERA CEDRO X 750 cc", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 29280.00, codigo: 1922, name: "SIMIL MADERA ROBLE CLARO X 750 cc", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    /// LACA MEGACRILICA
    { price: 8678.57, codigo: 1930, name: "LACA MEGACRILICA BRILLANTE X 1 L", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaTintaParaBarnizNetcolor = [
    { price: 1799.26, codigo: 1805, name: "TINTA PARA BARNIZ x 60cc. CEDRO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 1799.26, codigo: 1806, name: "TINTA PARA BARNIZ x 60cc. ALGARROBO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 1799.26, codigo: 1807, name: "TINTA PARA BARNIZ x 60cc. ROBLE OSCURO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 1799.26, codigo: 1808, name: "TINTA PARA BARNIZ x 60cc. ROBLE CLARO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 1799.26, codigo: 1809, name: "TINTA PARA BARNIZ x 60cc. PETIRIBI", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 1799.26, codigo: 1810, name: "TINTA PARA BARNIZ x 60cc. CAOBA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 1799.26, codigo: 1811, name: "TINTA PARA BARNIZ x 60cc. NOGAL", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 1799.26, codigo: 1812, name: "TINTA PARA BARNIZ x 60cc. VIRARO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2409.75, codigo: 1840, name: "MASILLA PARA MADERA X 200 G. CEDRO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2409.75, codigo: 1842, name: "MASILLA PARA MADERA X 200 G. NATURAL", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2409.75, codigo: 1844, name: "MASILLA PARA MADERA X 200 G. NOGAL", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2409.75, codigo: 1848, name: "MASILLA PARA MADERA X 200 G. ROB. CLARO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2409.75, codigo: 1850, name: "MASILLA PARA MADERA X 200 G. ROB. OSCURO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2409.75, codigo: 1852, name: "MASILLA PARA MADERA X 200 G. CAOBA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaPinturasEnAerosol = [
    { price: 2449.60, codigo: 2010, name: "PINT. AEROSOL x 240cc. AMARILLO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2011, name: "PINT. AEROSOL x 240cc. ANTIOXIDO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2012, name: "PINT. AEROSOL x 240cc. AZUL MARINO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2013, name: "PINT. AEROSOL x 240cc. BERMELLON", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2014, name: "PINT. AEROSOL x 240cc. BLANCO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2015, name: "PINT. AEROSOL x 240cc. BLANCO MATE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2016, name: "PINT. AEROSOL x 240cc. CELESTE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3241.60, codigo: 2017, name: "PINT. AEROSOL x 240cc. GRAFITO LLANTAS", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2018, name: "PINT. AEROSOL x 240cc. GRIS OSCURO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2019, name: "PINT. AEROSOL x 240cc. NEGRO MATE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2020, name: "PINT. AEROSOL x 240cc. NEGRO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2021, name: "PINT. AEROSOL x 240cc. NARANJA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2022, name: "PINT. AEROSOL x 240cc. VIOLETA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2023, name: "PINT. AEROSOL X 240cc. AZUL TRAFUL", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2024, name: "PINT. AEROSOL x 240c.c. NEGRO SATINADO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    ///
    { price: 2449.60, codigo: 2025, name: "PINT. AEROSOL x 240cc. TABACO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2026, name: "PINT. AEROSOL x 240c.c. BLANCO SATINADO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2027, name: "PINT. AEROSOL x 240cc. VERDE INGLES", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2910.40, codigo: 2028, name: "PINT. AERO x 240 cc. FIJ. PROTE. TRANS. (laca)", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2449.60, codigo: 2029, name: "PINT. AEROSOL x 240cc. BARNIZ TRANSP.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3406.40, codigo: 2030, name: "PINT. AEROSOL X 240 cc. CROMADO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3764.80, codigo: 2033, name: "PINT. AEROSOL x 240cc. METALIZADO ORO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3240.00, codigo: 2034, name: "PINT. AEROSOL x 240cc. METALIZADO PLATA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3547.20, codigo: 2035, name: "PINT. AEROSOL x 240cc. ALTA TEMP. ALUMINIO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3888.00, codigo: 2036, name: "PINT. AEROSOL x 240cc. ALTA TEMP. NEGRO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6956.80, codigo: 2039, name: "PINT. AEROSOL EPOXI X 440", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4243.20, codigo: 2043, name: "PINT. AEROSOL FLUOR. x240cc. AMARILLO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4243.20, codigo: 2044, name: "PINT. AEROSOL FLUOR. x240cc. NARANJA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4243.20, codigo: 2046, name: "PINT. AEROSOL FLUOR. x240cc. ROJO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 4243.20, codigo: 2047, name: "PINT. AEROSOL FLUOR. x240cc. VERDE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    ///
    { price: 4243.20, codigo: 2048, name: "PINT.AEROSOL FLUORX 240cc. ROSA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5652.80, codigo: 2049, name: "PINT. AEROSOL EFECTO ESMERILADO X 440", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5664.00, codigo: 2051, name: "ESPUMA DE POLIURETANO EXPANDIDO 293 gs. 300 ml", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6942.48, codigo: 4500, name: "PINT. AEROSOL X 440 AMARILLO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6942.48, codigo: 4560, name: "PINT. AEROSOL X 440 BLANCO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6942.48, codigo: 4562, name: "PINT. AEROSOL X 440 BLANCO MATE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6942.48, codigo: 4564, name: "PINT. AEROSOL X 440 BLANCO SATINADO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6942.48, codigo: 4576, name: "PINT. AEROSOL X 440 NEGRO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6942.48, codigo: 4578, name: "PINT. AEROSOL X 440 NEGRO MATE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6942.48, codigo: 4580, name: "PINT. AEROSOL X 440 NEGRO SATINADO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6942.48, codigo: 4596, name: "PINT. AEROSOL X 440 ROJO FURIA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 6942.48, codigo: 4600, name: "PINT. AEROSOL X 440 BARNIZ TRANSP. BRILLANTE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaPinturaAsfalticaYEpoxi = [
    { price: 2907.00, codigo: 2055, name: "PINTURA EPOXI DOS COMPONENTES X 80 C. C.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 7200.00, codigo: 2056, name: "PINTURA EPOXI DOS COMPONENTES 250 C. C.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3720.00, codigo: 2060, name: "PINTURA ASFALTICA x 1l.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 10771.20, codigo: 2061, name: "PINTURA ASFALTICA x 4 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 37042.20, codigo: 2062, name: "PINTURA ASFALTICA x 18 lts.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaCalDeBlanqueo = [
    { price: 1606.50, codigo: 2070, name: "CAL DE BLANQUEO x 4 kg.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 612.00, codigo: 2071, name: "LATIZADOR PARA CAL x 250 cc", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaPinturaEnPolvo = [
    { price: 1759.50, codigo: 2075, name: "PINTURA AL AGUA X 4 kg. BLANCA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaLatexFrentesNetcolor = [
    { price: 5600.75, codigo: 2090, name: "LATEX FRENTES IMPER. x 1 lt. BLANCO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 20661.62, codigo: 2091, name: "LATEX FRENTES IMPER. x 4 lts. BLANCO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 45541.93, codigo: 2092, name: "LATEX FRENTES IMPER. x 10 lts. BLANCO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 151503.28, codigo: 2093, name: "LATEX FRENTES x 20 lts. BLANCO SHER", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5168.13, codigo: 2100, name: "LATEX FRENTES IMPER. x 1 lt. ROJO TEJA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 18056.66, codigo: 2101, name: "LATEX FRENTES IMPER. x 4 lts. ROJO TEJA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 39041.35, codigo: 2102, name: "LATEX FRENTES IMPER. x 10 lts. ROJO TEJA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2266.00, codigo: 2103, name: "LATEX FRENTES IMPER. x 250 cc. ROJO TEJA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5168.13, codigo: 2104, name: "LATEX FRENTES x 1 l. BORGOÑA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 18882.78, codigo: 2105, name: "LATEX FRENTES x 4 lts. BORGOÑA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 40827.55, codigo: 2106, name: "LATEX FRENTES x 10 lts. BORGOÑA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 76544.66, codigo: 2107, name: "LATEX FRENTES x 20 lts. BORGOÑA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    ///
    { price: 5856.99, codigo: 2108, name: "LATEX FRENTES IMPER. x 1 l. GRIS CEMENTO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 21606.93, codigo: 2109, name: "LATEX FRENTES IMPER. x 4 lts. GRIS CEMENTO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 47625.55, codigo: 2110, name: "LATEX FRENTES IMPER. x 10lts. GRIS CEMENTO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3113.07, codigo: 2111, name: "LATEX FRENTES IMER. x 250 CC. GRIS CEMENTO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 8798.67, codigo: 2112, name: "LATEX FRENTES IMPER. x 1 l. VERDE MANZANA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 33311.02, codigo: 2113, name: "LATEX FRENTES IMPER. x 4 lts. VERDE MANZANA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 76655.07, codigo: 2114, name: "LATEX FRENTES IMPER. x 10 lts. VERDE MANZANA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3207.01, codigo: 2115, name: "LATEX FRENTES IMPER. x 250l CC. VERDE MANZANA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5856.99, codigo: 2116, name: "LATEX FRENTES x 1 l. VERDE SAFARI", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 21606.93, codigo: 2117, name: "LATEX FRENTES x 4 lts. VERDE SAFARI", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 47625.55, codigo: 2118, name: "LATEX FRENTES x 10 lts. VERDE SAFARI", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3113.07, codigo: 2119, name: "LATEX FRENTES x 250 CC. VERDE SAFARI", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    ///
    { price: 3230.08, codigo: 2120, name: "LATEX FRENTES x 1 l. NEGRO EBANO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 11801.74, codigo: 2121, name: "LATEX FRENTES x 4 lts. NEGRO EBANO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 25517.22, codigo: 2122, name: "LATEX FRENTES x 10 lts. NEGRO EBANO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 47840.41, codigo: 2123, name: "LATEX FRENTES x 20 lts. NEGRO EBANO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5168.13, codigo: 2124, name: "LATEX FRENTES IMPER. x 1 l. OCRE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 18882.78, codigo: 2125, name: "LATEX FRENTES  IMPER. x 4 lts. OCRE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 40829.20, codigo: 2126, name: "LATEX FRENTES IMPER x 10 lts. OCRE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2266.00, codigo: 2127, name: "LATEX FRENTES IMPER. x 250 cc. OCRE", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 5856.99, codigo: 2128, name: "LATEX FRENTES IMPER. x 1l. AZUL TRAFUL", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 21606.93, codigo: 2129, name: "LATEX FRENTES IMPER. x 4 lts. AZUL TRAFUL", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 47625.55, codigo: 2130, name: "LATEX FRENTES IMPER. x 10 lts. AZUL TRAFUL", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2429.15, codigo: 2131, name: "LATEX FRENTES IMPER. x 250 cc. AZUL TRAFUL", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    ///
    { price: 5168.13, codigo: 2132, name: "LATEX FRENTES IMPER x 1 l. MARRON AFRICANO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 18882.78, codigo: 2133, name: "LATEX FRENTES IMPER. x 4 lts. MARRON AFRICANO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 40827.55, codigo: 2134, name: "LATEX FRENTES IMPER. x 10 lts. MARRON AFRICANO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 2266.00, codigo: 2135, name: "LATEX FRENTES IMPER. x 250 cc. MARRON AFRICANO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 8798.67, codigo: 2140, name: "LATEX FRENTES IMPER x 1l. AMARILLO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 33311.02, codigo: 2141, name: "LATEX FRENTES IMPER. x 4 lts. AMARILLO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 76655.07, codigo: 2142, name: "LATEX FRENTES IMPER. x 10 lts. AMARILLO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3207.01, codigo: 2143, name: "LATEX FRENTES IMPER. x 250 cc. AMARILLO", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 13856.38, codigo: 2144, name: "LATEX FRENTES IMPER. x 1 l. MAGENTA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 53314.45, codigo: 2145, name: "LATEX FRENTES IMPER. x 4 lts. MAGENTA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 127874.91, codigo: 2146, name: "LATEX FRENTES IMPER. x 10 lts. MAGENTA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 3207.01, codigo: 2147, name: "LATEX FRENTES IMPER. x 250 cc. MAGENTA", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaFrentesFlexNetcolor = [
    { price: 7288.55, codigo: 2150, name: "IMPERMEABILIZANTE DE FRENTE x1,25 kg.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 27032.27, codigo: 2151, name: "IMPERMEABILIZANTE DE FRENTE x 5kg.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 63133.05, codigo: 2152, name: "IMPERMEABILIZANTE DE FRENTE x 12,5kg.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 120410.94, codigo: 2153, name: "IMPERMEABILIZANTE DE FRENTE x 25kg.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaTextudecorVenierTipoRevear = [
    { price: 22880.00, codigo: 2154, name: "TEXTUDECOR VENIER BLANCO X 7 kg.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 80800.00, codigo: 2155, name: "TEXTUDECOR VENIER BLANCO X 30 kg.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 63130.36, codigo: 2156, name: "IMPERM. DE MUROS ELASTOMERICO x 12,5 kg.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'},
    { price: 121694.23, codigo: 2157, name: "IMPERM. DE MUROS ELASTOMERICO x 25 kg.", imagen: 'url', descripcion: 'Descripción del producto', category: 'Categoría del producto'}
];

const listaTechosFlexNetcolor = [
    {
        price: 9583.66,
        codigo: 2158,
        name: "MEMBRANA ELASTICA BLANCO 1 kg.",
        imagen: "url",
        descripcion: "Membrana elástica de color blanco en presentación de 1 kg.",
        category: 'Categoría del producto'
    },
    {
        price: 31879.68,
        codigo: 2159,
        name: "MEMBRANA ELASTICA BLANCO 5 kg.",
        imagen: "url",
        descripcion: "Membrana elástica de color blanco en presentación de 5 kg.",
        category: 'Categoría del producto'
      },
      {
        price: 68363.67,
        codigo: 2160,
        name: "MEMBRANA ELASTICA BLANCO 10 kg.",
        imagen: "url",
        descripcion: "Membrana elástica de color blanco en presentación de 10 kg.",
        category: 'Categoría del producto'
      },
      {
        price: 112844.19,
        codigo: 2161,
        name: "MEMBRANA ELASTICA BLANCO 20 kg.",
        imagen: "url",
        descripcion: "Membrana elástica de color blanco en presentación de 20 kg.",
        category: 'Categoría del producto'
      }
];

const listaMembranaEnPastaMiColor = [
    {
        price: 5673.96,
        codigo: 2180,
        name: "MEMBRANA EN PASTA MI COLOR X 1 kg.",
        imagen: "url",
        descripcion: "Membrana en pasta de la línea Mi Color en presentación de 1 kg.",
        category: 'Descripción del producto'
      },
      {
        price: 20578.89,
        codigo: 2181,
        name: "MEMBRANA EN PASTA MI COLOR X 4 kg.",
        imagen: "url",
        descripcion: "Membrana en pasta de la línea Mi Color en presentación de 4 kg.",
        category: 'Descripción del producto'
      },
      {
        price: 45778.04,
        codigo: 2182,
        name: "MEMBRANA EN PASTA MI COLOR X 10 kg.",
        imagen: "url",
        descripcion: "Membrana en pasta de la línea Mi Color en presentación de 10 kg.",
        category: 'Descripción del producto'
      },
      {
        price: 87682.97,
        codigo: 2183,
        name: "MEMBRANA EN PASTA MI COLOR X 20 kg.",
        imagen: "url",
        descripcion: "Membrana en pasta de la línea Mi Color en presentación de 20 kg.",
        category: 'Descripción del producto'
      }
];

const listaDeProductos = [
    
]


module.exports = listaDeProductos;