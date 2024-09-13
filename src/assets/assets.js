require('dotenv').config();
const { DB_HOST, PORT } = process.env;
const mainUrl = (path) => `http://${DB_HOST}:${PORT}${path}`;

// IMAGEN NO DISPONIBLE -->
const noImageDefault = mainUrl('/assets/img/no-photo.png');
// <-----------------------

// URLS DE LOS PRODUCTOS ----->

// PRODUCTOS PARA PILETAS
const imageCloro5lt = mainUrl('/assets/img/piletas/7100.png');
const imageSulfatoCobre = mainUrl('/assets/img/piletas/7150.png');
const image7105 = mainUrl('/assets/img/piletas/7105.jpg');
const image7110 = mainUrl('/assets/img/piletas/7110.jpg');
const image7145 = mainUrl('/assets/img/piletas/7145.jpg');

// QUIMICOS Y DILUYENTES

// ACEITES
const imageLino900cc = mainUrl('/assets/img/aceites/1150.png');
const imageLino5lt = mainUrl('/assets/img/aceites/1151.png');

// DILUYENTES
const imageAguarras900cc = mainUrl('/assets/img/diluyentes/1120.png');
const imageAguarras5lt = mainUrl('/assets/img/diluyentes/1121.png');
const imageKerosene900cc = mainUrl('/assets/img/diluyentes/1140.png');
const imageKerosene5lt = mainUrl('/assets/img/diluyentes/1141.png');
const imageSolventeInd = mainUrl('/assets/img/diluyentes/1124.png');
const imageThinner900cc = mainUrl('/assets/img/diluyentes/1130.png');
const imageThinner5lt = mainUrl('/assets/img/diluyentes/1131.png');
const imageThinnerOro900cc = mainUrl('/assets/img/diluyentes/1134.png');
const imageThinnerOro5lt = mainUrl('/assets/img/diluyentes/1135.png');
const imageRemovedorGel = mainUrl('/assets/img/diluyentes/1146.png');

// QUIMICOS
const imageAcidoM900cc = mainUrl('/assets/img/quimicos/1007.png');
const imageAcidoM5lt = mainUrl('/assets/img/quimicos/1008.png');
const imageDestapaC = mainUrl('/assets/img/quimicos/1015.png');
const imageSodaC = mainUrl('/assets/img/quimicos/1005.png');
const image998 = mainUrl('/assets/img/quimicos/998.jpg');
const image1001 = mainUrl('/assets/img/quimicos/1001.jpg');
const image1004 = mainUrl('/assets/img/quimicos/1004.jpeg');
const image1009 = mainUrl('/assets/img/quimicos/1009.jpg');
const image1011 = mainUrl('/assets/img/quimicos/1011.jpg');
const image1040 = mainUrl('/assets/img/quimicos/1040.jpg');
const image1046 = mainUrl('/assets/img/quimicos/1046.jpg');
const image1048 = mainUrl('/assets/img/quimicos/1048.png');
const image1050 = mainUrl('/assets/img/quimicos/1050.png');
const image1056 = mainUrl('/assets/img/quimicos/1056.jpg');
const image1060 = mainUrl('/assets/img/quimicos/1060.jpg');
const image1066 = mainUrl('/assets/img/quimicos/1066.jpg');
const image1068 = mainUrl('/assets/img/quimicos/1068.jpg');
const image1070 = mainUrl('/assets/img/quimicos/1070.jpg');
const image1075 = mainUrl('/assets/img/quimicos/1075.jpg');
const image1076 = mainUrl('/assets/img/quimicos/1076.jpg');
const image1080 = mainUrl('/assets/img/quimicos/1080.jpeg');
const image1081 = mainUrl('/assets/img/quimicos/1081.jpeg');


// ZINGUERIA ------->

// CABALLETES
const image7200 = mainUrl('/assets/img/zingueria/7200.jpg');

// CANALETAS Y ACC TECHOS
const image7000 = mainUrl('/assets/img/zingueria/7000.jpg');
const image7010 = mainUrl('/assets/img/zingueria/7010.jpg');
const image7020 = mainUrl('/assets/img/zingueria/7020.jpg');
const image7030 = mainUrl('/assets/img/zingueria/7030.jpg');
const image7040 = mainUrl('/assets/img/zingueria/7040.jpg');
const image7050 = mainUrl('/assets/img/zingueria/7050.jpg');
const image7060 = mainUrl('/assets/img/zingueria/7060.jpg');

// CAÑOS Y ACC GALVANIZADOS
const image4000 = mainUrl('/assets/img/zingueria/4000.jpg');
const image4004 = mainUrl('/assets/img/zingueria/4004.jpg');
const image4010 = mainUrl('/assets/img/zingueria/4010.jpg');
const image4018 = mainUrl('/assets/img/zingueria/4018.jpg');
const image4026 = mainUrl('/assets/img/zingueria/4026.jpg');
const image4036 = mainUrl('/assets/img/zingueria/4036.jpg');
const image4046 = mainUrl('/assets/img/zingueria/4046.jpg');

// CAÑOS Y ACC SALAMANDRA
const image4070 = mainUrl('/assets/img/zingueria/4070.jpg');
const image4090 = mainUrl('/assets/img/zingueria/4090.jpg');

// CENEFAS
const image7300 = mainUrl('/assets/img/zingueria/7300.jpg');

// GRAMPAS
const image4300 = mainUrl('/assets/img/zingueria/4300.jpg');
const image4400 = mainUrl('/assets/img/zingueria/4400.jpg');
const image4404 = mainUrl('/assets/img/zingueria/4404.jpg');

// REDUCC GALVANIZADAS
const image4060 = mainUrl('/assets/img/zingueria/4060.jpg');

// <----------

// ART. DE LIMPIEZA
const image2465 = mainUrl('/assets/img/art-limpieza/2465.jpg');
const image2470 = mainUrl('/assets/img/art-limpieza/2470.jpeg');
const image2484 = mainUrl('/assets/img/art-limpieza/2484.jpeg');
const image2485 = mainUrl('/assets/img/art-limpieza/2485.png');
const image2486 = mainUrl('/assets/img/art-limpieza/2486.png');
const image2487 = mainUrl('/assets/img/art-limpieza/2487.png');
const image2488 = mainUrl('/assets/img/art-limpieza/2488.png');
const image2489 = mainUrl('/assets/img/art-limpieza/2489.png');
const image2492 = mainUrl('/assets/img/art-limpieza/2492.png');
const image2494 = mainUrl('/assets/img/art-limpieza/2494.png');
const image2496 = mainUrl('/assets/img/art-limpieza/2496.png');
const image2500 = mainUrl('/assets/img/art-limpieza/2500.jpg');
const image2502 = mainUrl('/assets/img/art-limpieza/2502.png');
const image2504 = mainUrl('/assets/img/art-limpieza/2504.jpg');
const image2505 = mainUrl('/assets/img/art-limpieza/2505.png');
const image2506 = mainUrl('/assets/img/art-limpieza/2506.png');
const image2507 = mainUrl('/assets/img/art-limpieza/2507.png');
const image2509 = mainUrl('/assets/img/art-limpieza/2509.jpg');
const image2512 = mainUrl('/assets/img/art-limpieza/2512.jpg');
const image2513 = mainUrl('/assets/img/art-limpieza/2513.jpg');
const image2515 = mainUrl('/assets/img/art-limpieza/2515.jpg');

// ART. PARA CONSTRUCCIÓN ---------->

// SIKA
const image2800 = mainUrl('/assets/img/art-construccion/2800.jpg');
const image2801 = mainUrl('/assets/img/art-construccion/2801.jpg');
const image2802 = mainUrl('/assets/img/art-construccion/2802.jpg');
const image2803 = mainUrl('/assets/img/art-construccion/2803.jpg');
const image2804 = mainUrl('/assets/img/art-construccion/2804.jpg');
const image2805 = mainUrl('/assets/img/art-construccion/2805.jpg');
const image2812 = mainUrl('/assets/img/art-construccion/2812.jpg');

// FERRITES
const image2901 = mainUrl('/assets/img/art-construccion/2901.jpg');

// KLAUKOL
const image2702 = mainUrl('/assets/img/art-construccion/2702.jpg');
const image2703 = mainUrl('/assets/img/art-construccion/2703.jpg');
const image2704 = mainUrl('/assets/img/art-construccion/2704.jpg');
const image2705 = mainUrl('/assets/img/art-construccion/2705.jpg');
const image2706 = mainUrl('/assets/img/art-construccion/2706.jpg');
const image2708 = mainUrl('/assets/img/art-construccion/2708.jpg');

// SUPERTECH
const image2859 = mainUrl('/assets/img/art-construccion/2859.jpg');
const image2870 = mainUrl('/assets/img/art-construccion/2870.jpg');

// <------------

// AUTOMOTOR
const image2379 = mainUrl('/assets/img/automotor/2379.jpg');
const image2380 = mainUrl('/assets/img/automotor/2380.jpg');
const image23801 = mainUrl('/assets/img/automotor/2380-1.jpg');
const image2381 = mainUrl('/assets/img/automotor/2381.jpg');
const image2382 = mainUrl('/assets/img/automotor/2382.jpg');
const image2383 = mainUrl('/assets/img/automotor/2383.jpg');
const image2384 = mainUrl('/assets/img/automotor/2384.jpg');
const image2385 = mainUrl('/assets/img/automotor/2385.jpg');
const image2387 = mainUrl('/assets/img/automotor/2387.jpg');
const image2389 = mainUrl('/assets/img/automotor/2389.jpg');
const image2390 = mainUrl('/assets/img/automotor/2390.jpg');
const image2392 = mainUrl('/assets/img/automotor/2392.jpg');
const image2398 = mainUrl('/assets/img/automotor/2398.jpg');

// ACC. PARA PINTURA ---------->

// BANDEJAS PINTOR Y ACC.
const image2360 = mainUrl('/assets/img/acc-pintura/2360.jpg');
const image2361 = mainUrl('/assets/img/acc-pintura/2361.jpg');
const image2366 = mainUrl('/assets/img/acc-pintura/2366.jpg');
const image2369 = mainUrl('/assets/img/acc-pintura/2369.jpg');
const image2370 = mainUrl('/assets/img/acc-pintura/2370.jpg');
const image2371 = mainUrl('/assets/img/acc-pintura/2371.jpg');
const image2377 = mainUrl('/assets/img/acc-pintura/2377.jpg');
const image2378 = mainUrl('/assets/img/acc-pintura/2378.jpg');

// LIJAS
const image3500 = mainUrl('/assets/img/acc-pintura/3500.jpg');
const image3526 = mainUrl('/assets/img/acc-pintura/3526.jpg');
const image3540 = mainUrl('/assets/img/acc-pintura/3540.jpg');
const image3550 = mainUrl('/assets/img/acc-pintura/3550.jpg');

// PINCELES
const image2300 = mainUrl('/assets/img/acc-pintura/2300.jpg');
const image2301 = mainUrl('/assets/img/acc-pintura/2301.jpg');
const image2302 = mainUrl('/assets/img/acc-pintura/2302.jpg');
const image2303 = mainUrl('/assets/img/acc-pintura/2303.jpg');
const image2304 = mainUrl('/assets/img/acc-pintura/2304.jpg');
const image2305 = mainUrl('/assets/img/acc-pintura/2305.jpg');
const image2320 = mainUrl('/assets/img/acc-pintura/2320.jpg');
const image2321 = mainUrl('/assets/img/acc-pintura/2321.jpg');

// RODILLOS
const image2330 = mainUrl('/assets/img/acc-pintura/2330.jpg');
const image2331 = mainUrl('/assets/img/acc-pintura/2331.jpg');
const image2332 = mainUrl('/assets/img/acc-pintura/2332.jpg');
const image2340 = mainUrl('/assets/img/acc-pintura/2340.jpg');
const image2350 = mainUrl('/assets/img/acc-pintura/2350.jpg');

// <--------------

// FERRETERIA ---->

// TANZAS
const image2441 = mainUrl('/assets/img/ferreteria/2441.jpg');
const image2450 = mainUrl('/assets/img/ferreteria/2450.jpg');
// TARUGOS
const image2459 = mainUrl('/assets/img/ferreteria/2459.jpg');
const image2460 = mainUrl('/assets/img/ferreteria/2460.jpg');
const image2461 = mainUrl('/assets/img/ferreteria/2461.jpg');
const image2462 = mainUrl('/assets/img/ferreteria/2462.jpg');
const image2466 = mainUrl('/assets/img/ferreteria/2466.jpg');
const image2468 = mainUrl('/assets/img/ferreteria/2468.jpg');
const image2471 = mainUrl('/assets/img/ferreteria/2471.jpg');
const image2472 = mainUrl('/assets/img/ferreteria/2472.jpg');
// TORNILLOS
const image5100 = mainUrl('/assets/img/ferreteria/5100.jpg');
const image5200 = mainUrl('/assets/img/ferreteria/5200.jpg');
const image5240 = mainUrl('/assets/img/ferreteria/5240.jpg');
const image5300 = mainUrl('/assets/img/ferreteria/5300.jpg');

// PRECINTOS
const image5500 = mainUrl('/assets/img/ferreteria/5500.jpg');
const image5508 = mainUrl('/assets/img/ferreteria/5508.jpg');
const image5509 = mainUrl('/assets/img/ferreteria/5509.jpg');
const image5510 = mainUrl('/assets/img/ferreteria/5510.jpg');
const image5512 = mainUrl('/assets/img/ferreteria/5512.jpg');
const image5514 = mainUrl('/assets/img/ferreteria/5514.jpg');

// <---------

// INSECTICIDAS Y RATICIDAS
const image2517 = mainUrl('/assets/img/insec-rat/2517.jpg');
const image2518 = mainUrl('/assets/img/insec-rat/2518.jpg');
const image2519 = mainUrl('/assets/img/insec-rat/2519.jpg');
const image2520 = mainUrl('/assets/img/insec-rat/2520.jpg');
const image2522 = mainUrl('/assets/img/insec-rat/2522.jpg');
const image2523 = mainUrl('/assets/img/insec-rat/2523.jpg');
const image2525 = mainUrl('/assets/img/insec-rat/2525.jpg');
const image2526 = mainUrl('/assets/img/insec-rat/2526.jpg');
const image2530 = mainUrl('/assets/img/insec-rat/2530.jpg');
const image2532 = mainUrl('/assets/img/insec-rat/2532.jpg');
const image2534 = mainUrl('/assets/img/insec-rat/2534.jpg');
const image2550 = mainUrl('/assets/img/insec-rat/2550.jpg');
const image2554 = mainUrl('/assets/img/insec-rat/2554.jpg');
const image2555 = mainUrl('/assets/img/insec-rat/2555.jpg');
const image2556 = mainUrl('/assets/img/insec-rat/2556.jpg');
const image2559 = mainUrl('/assets/img/insec-rat/2559.jpg');
const image2560 = mainUrl('/assets/img/insec-rat/2560.jpg');
const image2564 = mainUrl('/assets/img/insec-rat/2564.jpg');
const image2567 = mainUrl('/assets/img/insec-rat/2567.jpg');
const image2578 = mainUrl('/assets/img/insec-rat/2578.jpg');
const image2580 = mainUrl('/assets/img/insec-rat/2580.jpg');

// POLIETILENO Y AGROTILENO
const image2404 = mainUrl('/assets/img/polietileno-agrotileno/2404.jpg');
const image2413 = mainUrl('/assets/img/polietileno-agrotileno/2413.jpg');
const image2416 = mainUrl('/assets/img/polietileno-agrotileno/2416.jpg');

// PINTURAS -------->

// ANTIOXIDOS
const image1250 = mainUrl('/assets/img/pinturas/1250.jpg');

// BARNIZ MARINO
const image1780 = mainUrl('/assets/img/pinturas/1780.jpg');
const image1900 = mainUrl('/assets/img/pinturas/1900.jpg');
const image1920 = mainUrl('/assets/img/pinturas/1920.jpg');
const image1930 = mainUrl('/assets/img/pinturas/1930.jpg');

// CAL DE BLANQUEO
const image2070 = mainUrl('/assets/img/pinturas/2070.jpg');
const image2071 = mainUrl('/assets/img/pinturas/2071.jpg');

// CIELORRASO
const image2200 = mainUrl('/assets/img/pinturas/2200.jpg');

// CONVERTIDOR + ESMALTE
const image1700 = mainUrl('/assets/img/pinturas/1700.jpg');

// ENTONADORES
const image1450 = mainUrl('/assets/img/pinturas/1450.jpg');

// ESMALTE MATE
const image1760 = mainUrl('/assets/img/pinturas/1760.jpg');

// ESMALTE SATINADO
const image1750 = mainUrl('/assets/img/pinturas/1750.jpg');

// FONDOS Y FIJADORES
const image1392 = mainUrl('/assets/img/pinturas/1392.jpg');
const image1396 = mainUrl('/assets/img/pinturas/1396.jpg');
const image1399 = mainUrl('/assets/img/pinturas/1399.jpg');
const image1403 = mainUrl('/assets/img/pinturas/1403.jpg');
const image1414 = mainUrl('/assets/img/pinturas/1414.jpg');
const image1420 = mainUrl('/assets/img/pinturas/1420.jpg');

// FRENTES FLEX
const image2150 = mainUrl('/assets/img/pinturas/2150.jpg');

// LATEX AMATEUR EXTERIOR
const image2245 = mainUrl('/assets/img/pinturas/2245.jpg');

// LATEX AMATEUR INTERIOR
const image2250 = mainUrl('/assets/img/pinturas/2250.jpg');

// LATEX FRENTES
const image2090 = mainUrl('/assets/img/pinturas/2090.jpg');

// LATEX INTERIOR EXTERIOR
const image2230 = mainUrl('/assets/img/pinturas/2230.jpg');

// MEMBRANA PASTA
const image2180 = mainUrl('/assets/img/pinturas/2180.jpg');

// PINTURA AEROSOL
const image2010 = mainUrl('/assets/img/pinturas/2010.jpg');
const image2028 = mainUrl('/assets/img/pinturas/2028.jpg');
const image2029 = mainUrl('/assets/img/pinturas/2029.jpg');
const image2030 = mainUrl('/assets/img/pinturas/2030.jpg');
const image2039 = mainUrl('/assets/img/pinturas/2039.jpg');
const image2043 = mainUrl('/assets/img/pinturas/2043.jpg');
const image2049 = mainUrl('/assets/img/pinturas/2049.jpg');
const image2051 = mainUrl('/assets/img/pinturas/2051.jpg');

// PINTURA ASFALTICA EPOXI
const image2055 = mainUrl('/assets/img/pinturas/2055.jpg');
const image2060 = mainUrl('/assets/img/pinturas/2060.jpg');
const image2062 = mainUrl('/assets/img/pinturas/2062.jpg');

// PINTURA EN POLVO
const image2075 = mainUrl('/assets/img/pinturas/2075.jpg');

// PINTURA PARA PIZARRON
const image2255 = mainUrl('/assets/img/pinturas/2255.jpg');

// TEXTUDECO VENIER
const image2154 = mainUrl('/assets/img/pinturas/2154.jpg');

// TINTA PARA BARNIZ
const image1805 = mainUrl('/assets/img/pinturas/1805.jpg');
const image1840 = mainUrl('/assets/img/pinturas/1840.jpg');

// LATEX PREMIUM INTERIOR EXTERIOR
const image2205 = mainUrl('/assets/img/pinturas/2205.jpg');

// <-----------------

// <----------------------------------------------

module.exports = {
    noImageDefault, imageCloro5lt, imageSulfatoCobre, imageLino900cc, imageLino5lt, imageAguarras900cc,
    imageAguarras5lt, imageKerosene900cc, imageKerosene5lt, imageSolventeInd, imageThinner900cc, imageThinner5lt,
    imageThinnerOro900cc, imageThinnerOro5lt, imageAcidoM900cc, imageAcidoM5lt, imageDestapaC, imageSodaC,
    image7200, image7000, image7010, image7020, image7030, 
    image7040, image7050, image7060, image4000, image4004,
    image4010, image4018, image4026, image4036, image4046,
    image4070, image4090, image7300, image4300, image4400, image4404, image4060,
    imageRemovedorGel, image998, image1001, image1004, image1009, image1011, image1040, image1046, image1048, 
    image1050, image1056, image1060, image1066, image1068, image1070, image1075, image1076, image1080, image1081,
    image7105, image7110, image7145, image2465, image2470, image2484, image2485, image2486, image2487, image2488,
    image2489, image2492, image2494, image2496, image2500, image2502, image2504,
    image2505, image2506, image2507, image2509, image2512, image2513, image2515,
    image2800, image2801, image2802, image2803, image2804, image2805, image2812, image2901,
    image2379, image2380, image23801, image2381, image2382, image2383, image2384, image2385, image2387, image2389, image2390, image2392, image2398,
    image2360, image2361, image2366, image2369, image2370, image2371, image2377, image2378,
    image2441, image2450, image2459, image2460, image2461, image2462, image2466, image2468, image2471, image2472, 
    image5100, image5200, image5240, image5300,
    image2517, image2518, image2519, image2520, image2522, image2523, image2525, image2526, image2530, image2532, image2534, image2550, image2554, image2555, image2556, image2559, image2560, image2564, image2567, image2578, image2580,
    image2702, image2703, image2704, image2705, image2706, image2708,
    image3500, image3526, image3540, image3550,
    image2300, image2301, image2302, image2303, image2304, image2305, image2320, image2321,
    image5500, image5508, image5509, image5510, image5512, image5514,
    image2404, image2413, image2416,
    image2330, image2331, image2332, image2340, image2350,
    image2859, image2870,
    image1250, image1780, image1900, image1920, image1930, image2070, image2071, image2200, image1700, image1450, image1760, image1750,
    image1392, image1396, image1399, image1403, image1414, image1420, image2150, image2245, image2250, image2090, image2230, image2180,
    image2010, image2028, image2029, image2030, image2039, image2043, image2049, image2051, image2055, image2060, image2062, image2075,
    image2255, image2154, image1805, image1840, image2205,
};