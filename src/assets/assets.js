require('dotenv').config();
const { DB_HOST, PORT } = process.env;
const mainUrl = (path) => `http://${DB_HOST}:${PORT}${path}`;

const images = {
    // IMAGEN NO DISPONIBLE -->
    noImageDefault: mainUrl('/assets/img/no-photo.png'),

    // PRODUCTOS PARA PILETAS
    piletas: {
        image7100: mainUrl('/assets/img/db-images/7100.png'),
        image7150: mainUrl('/assets/img/db-images/7150.png'),
        image7105: mainUrl('/assets/img/db-images/7105.jpg'),
        image7110: mainUrl('/assets/img/db-images/7110.jpg'),
        image7145: mainUrl('/assets/img/db-images/7145.jpg'),
    },

    // QUIMICOS Y DILUYENTES
    // ACEITES
    aceites: {
        image1150: mainUrl('/assets/img/db-images/1150.png'),
        image1151: mainUrl('/assets/img/db-images/1151.png'),
    },
    // DILUYENTES
    diluyentes: {
        image1120: mainUrl('/assets/img/db-images/1120.png'),
        image1121 : mainUrl('/assets/img/db-images/1121.png'),
        image1140 : mainUrl('/assets/img/db-images/1140.png'),
        image1141 : mainUrl('/assets/img/db-images/1141.png'),
        image1124 : mainUrl('/assets/img/db-images/1124.png'),
        image1130 : mainUrl('/assets/img/db-images/1130.png'),
        image1131 : mainUrl('/assets/img/db-images/1131.png'),
        image1134 : mainUrl('/assets/img/db-images/1134.png'),
        image1135 : mainUrl('/assets/img/db-images/1135.png'),
        image1146 : mainUrl('/assets/img/db-images/1146.png'),
    },
    // QUIMICOS
    quimicos: {
        image1007 : mainUrl('/assets/img/db-images/1007.png'),
        image1008 : mainUrl('/assets/img/db-images/1008.png'),
        image1015 : mainUrl('/assets/img/db-images/1015.png'),
        image1005 : mainUrl('/assets/img/db-images/1005.png'),
        image998  : mainUrl('/assets/img/db-images/998.jpg'),       
        image1001 : mainUrl('/assets/img/db-images/1001.jpg'),
        image1004 : mainUrl('/assets/img/db-images/1004.jpeg'),
        image1009 : mainUrl('/assets/img/db-images/1009.jpg'),
        image1011 : mainUrl('/assets/img/db-images/1011.jpg'),
        image1040 : mainUrl('/assets/img/db-images/1040.jpg'),
        image1046 : mainUrl('/assets/img/db-images/1046.jpg'),
        image1048 : mainUrl('/assets/img/db-images/1048.png'),
        image1050 : mainUrl('/assets/img/db-images/1050.png'),
        image1056 : mainUrl('/assets/img/db-images/1056.jpg'),
        image1060 : mainUrl('/assets/img/db-images/1060.jpg'),
        image1066 : mainUrl('/assets/img/db-images/1066.jpg'),
        image1068 : mainUrl('/assets/img/db-images/1068.jpg'),
        image1070 : mainUrl('/assets/img/db-images/1070.jpg'),
        image1075 : mainUrl('/assets/img/db-images/1075.jpg'),
        image1076 : mainUrl('/assets/img/db-images/1076.jpg'),
        image1080 : mainUrl('/assets/img/db-images/1080.jpeg'),
        image1081 : mainUrl('/assets/img/db-images/1081.jpeg'),
    },

    // ZINGUERIA
    zingueria: {
        // CABALLETES
        image7200: mainUrl('/assets/img/db-images/7200.jpg'),
        // CANALETAS Y ACC TECHOS
        image7000 : mainUrl('/assets/img/db-images/7000.jpg'),
        image7010 : mainUrl('/assets/img/db-images/7010.jpg'),
        image7020 : mainUrl('/assets/img/db-images/7020.jpg'),
        image7030 : mainUrl('/assets/img/db-images/7030.jpg'),
        image7040 : mainUrl('/assets/img/db-images/7040.jpg'),
        image7050 : mainUrl('/assets/img/db-images/7050.jpg'),
        image7060 : mainUrl('/assets/img/db-images/7060.jpg'),
        // CAÑOS Y ACC GALVANIZADOS
        image4000 : mainUrl('/assets/img/db-images/4000.jpg'),
        image4004 : mainUrl('/assets/img/db-images/4004.jpg'),
        image4010 : mainUrl('/assets/img/db-images/4010.jpg'),
        image4018 : mainUrl('/assets/img/db-images/4018.jpg'),
        image4026 : mainUrl('/assets/img/db-images/4026.jpg'),
        image4036 : mainUrl('/assets/img/db-images/4036.jpg'),
        image4046 : mainUrl('/assets/img/db-images/4046.jpg'),
        // CAÑOS Y ACC SALAMANDRA
        image4070 : mainUrl('/assets/img/db-images/4070.jpg'),
        image4090 : mainUrl('/assets/img/db-images/4090.jpg'),
        // CENEFAS
        image7300 : mainUrl('/assets/img/db-images/7300.jpg'),
        // GRAMPAS
        image4300 : mainUrl('/assets/img/db-images/4300.jpg'),
        image4400 : mainUrl('/assets/img/db-images/4400.jpg'),
        image4404 : mainUrl('/assets/img/db-images/4404.jpg'),
        // REDUCC GALVANIZADAS
        image4060 : mainUrl('/assets/img/db-images/4060.jpg'),
    },

    // ART. DE LIMPIEZA
    artLimpieza: {
        image2465 : mainUrl('/assets/img/db-images/2465.jpg'),
        image2470 : mainUrl('/assets/img/db-images/2470.jpeg'),
        image2484 : mainUrl('/assets/img/db-images/2484.jpeg'),
        image2485 : mainUrl('/assets/img/db-images/2485.png'),
        image2486 : mainUrl('/assets/img/db-images/2486.png'),
        image2487 : mainUrl('/assets/img/db-images/2487.png'),
        image2488 : mainUrl('/assets/img/db-images/2488.png'),
        image2489 : mainUrl('/assets/img/db-images/2489.png'),
        image2492 : mainUrl('/assets/img/db-images/2492.png'),
        image2494 : mainUrl('/assets/img/db-images/2494.png'),
        image2496 : mainUrl('/assets/img/db-images/2496.png'),
        image2500 : mainUrl('/assets/img/db-images/2500.jpg'),
        image2502 : mainUrl('/assets/img/db-images/2502.png'),
        image2504 : mainUrl('/assets/img/db-images/2504.jpg'),
        image2505 : mainUrl('/assets/img/db-images/2505.png'),
        image2506 : mainUrl('/assets/img/db-images/2506.png'),
        image2507 : mainUrl('/assets/img/db-images/2507.png'),
        image2509 : mainUrl('/assets/img/db-images/2509.jpg'),
        image2512 : mainUrl('/assets/img/db-images/2512.jpg'),
        image2513 : mainUrl('/assets/img/db-images/2513.jpg'),
        image2515 : mainUrl('/assets/img/db-images/2515.jpg'),
    },

    // ART. PARA CONSTRUCCIÓN
    artConstru: {
        // SIKA
        image2800 : mainUrl('/assets/img/db-images/2800.jpg'),
        image2801 : mainUrl('/assets/img/db-images/2801.jpg'),
        image2802 : mainUrl('/assets/img/db-images/2802.jpg'),
        image2803 : mainUrl('/assets/img/db-images/2803.jpg'),
        image2804 : mainUrl('/assets/img/db-images/2804.jpg'),
        image2805 : mainUrl('/assets/img/db-images/2805.jpg'),
        image2812 : mainUrl('/assets/img/db-images/2812.jpg'),
        // FERRITES
        image2901 : mainUrl('/assets/img/db-images/2901.jpg'),

        // KLAUKOL
        image2702 : mainUrl('/assets/img/db-images/2702.jpg'),
        image2703 : mainUrl('/assets/img/db-images/2703.jpg'),
        image2704 : mainUrl('/assets/img/db-images/2704.jpg'),
        image2705 : mainUrl('/assets/img/db-images/2705.jpg'),
        image2706 : mainUrl('/assets/img/db-images/2706.jpg'),
        image2708 : mainUrl('/assets/img/db-images/2708.jpg'),

        // SUPERTECH
        image2859 : mainUrl('/assets/img/db-images/2859.jpg'),
        image2870 : mainUrl('/assets/img/db-images/2870.jpg'),
    },

    // AUTOMOTOR
    automotor: {
        image2379 : mainUrl('/assets/img/db-images/2379.jpg'),
        image2380 : mainUrl('/assets/img/db-images/2380.jpg'),
        image23801:  mainUrl('/assets/img/db-images/2380-1.jpg'),
        image2381 : mainUrl('/assets/img/db-images/2381.jpg'),
        image2382 : mainUrl('/assets/img/db-images/2382.jpg'),
        image2383 : mainUrl('/assets/img/db-images/2383.jpg'),
        image2384 : mainUrl('/assets/img/db-images/2384.jpg'),
        image2385 : mainUrl('/assets/img/db-images/2385.jpg'),
        image2387 : mainUrl('/assets/img/db-images/2387.jpg'),
        image2389 : mainUrl('/assets/img/db-images/2389.jpg'),
        image2390 : mainUrl('/assets/img/db-images/2390.jpg'),
        image2392 : mainUrl('/assets/img/db-images/2392.jpg'),
        image2398 : mainUrl('/assets/img/db-images/2398.jpg'),
    },

    // ACC. PARA PINTURA
    accPintura: {
        // BANDEJAS PINTOR Y ACC.
        image2360 : mainUrl('/assets/img/db-images/2360.jpg'),
        image2361 : mainUrl('/assets/img/db-images/2361.jpg'),
        image2366 : mainUrl('/assets/img/db-images/2366.jpg'),
        image2369 : mainUrl('/assets/img/db-images/2369.jpg'),
        image2370 : mainUrl('/assets/img/db-images/2370.jpg'),
        image2371 : mainUrl('/assets/img/db-images/2371.jpg'),
        image2377 : mainUrl('/assets/img/db-images/2377.jpg'),
        image2378 : mainUrl('/assets/img/db-images/2378.jpg'),

        // LIJAS
        image3500 : mainUrl('/assets/img/db-images/3500.jpg'),
        image3526 : mainUrl('/assets/img/db-images/3526.jpg'),
        image3540 : mainUrl('/assets/img/db-images/3540.jpg'),
        image3550 : mainUrl('/assets/img/db-images/3550.jpg'),

        // PINCELES
        image2300 : mainUrl('/assets/img/db-images/2300.jpg'),
        image2301 : mainUrl('/assets/img/db-images/2301.jpg'),
        image2302 : mainUrl('/assets/img/db-images/2302.jpg'),
        image2303 : mainUrl('/assets/img/db-images/2303.jpg'),
        image2304 : mainUrl('/assets/img/db-images/2304.jpg'),
        image2305 : mainUrl('/assets/img/db-images/2305.jpg'),
        image2320 : mainUrl('/assets/img/db-images/2320.jpg'),
        image2321 : mainUrl('/assets/img/db-images/2321.jpg'),

        // RODILLOS
        image2330 : mainUrl('/assets/img/db-images/2330.jpg'),
        image2331 : mainUrl('/assets/img/db-images/2331.jpg'),
        image2332 : mainUrl('/assets/img/db-images/2332.jpg'),
        image2340 : mainUrl('/assets/img/db-images/2340.jpg'),
        image2350 : mainUrl('/assets/img/db-images/2350.jpg'),
    },

    // FERRETERIA
    ferreteria: {
        // TANZAS
        image2441 : mainUrl('/assets/img/db-images/2441.jpg'),
        image2450 : mainUrl('/assets/img/db-images/2450.jpg'),
        // TARUGOS
        image2459 : mainUrl('/assets/img/db-images/2459.jpg'),
        image2460 : mainUrl('/assets/img/db-images/2460.jpg'),
        image2461 : mainUrl('/assets/img/db-images/2461.jpg'),
        image2462 : mainUrl('/assets/img/db-images/2462.jpg'),
        image2466 : mainUrl('/assets/img/db-images/2466.jpg'),
        image2468 : mainUrl('/assets/img/db-images/2468.jpg'),
        image2471 : mainUrl('/assets/img/db-images/2471.jpg'),
        image2472 : mainUrl('/assets/img/db-images/2472.jpg'),
        // TORNILLOS
        image5100 : mainUrl('/assets/img/db-images/5100.jpg'),
        image5200 : mainUrl('/assets/img/db-images/5200.jpg'),
        image5240 : mainUrl('/assets/img/db-images/5240.jpg'),
        image5300 : mainUrl('/assets/img/db-images/5300.jpg'),

        // PRECINTOS
        image5500 : mainUrl('/assets/img/db-images/5500.jpg'),
        image5508 : mainUrl('/assets/img/db-images/5508.jpg'),
        image5509 : mainUrl('/assets/img/db-images/5509.jpg'),
        image5510 : mainUrl('/assets/img/db-images/5510.jpg'),
        image5512 : mainUrl('/assets/img/db-images/5512.jpg'),
        image5514 : mainUrl('/assets/img/db-images/5514.jpg'),
    },

    // INSECTICIDAS Y RATICIDAS
    insecRat: {
        image2517 : mainUrl('/assets/img/db-images/2517.jpg'),
        image2518 : mainUrl('/assets/img/db-images/2518.jpg'),
        image2519 : mainUrl('/assets/img/db-images/2519.jpg'),
        image2520 : mainUrl('/assets/img/db-images/2520.jpg'),
        image2522 : mainUrl('/assets/img/db-images/2522.jpg'),
        image2523 : mainUrl('/assets/img/db-images/2523.jpg'),
        image2525 : mainUrl('/assets/img/db-images/2525.jpg'),
        image2526 : mainUrl('/assets/img/db-images/2526.jpg'),
        image2530 : mainUrl('/assets/img/db-images/2530.jpg'),
        image2532 : mainUrl('/assets/img/db-images/2532.jpg'),
        image2534 : mainUrl('/assets/img/db-images/2534.jpg'),
        image2550 : mainUrl('/assets/img/db-images/2550.jpg'),
        image2554 : mainUrl('/assets/img/db-images/2554.jpg'),
        image2555 : mainUrl('/assets/img/db-images/2555.jpg'),
        image2556 : mainUrl('/assets/img/db-images/2556.jpg'),
        image2559 : mainUrl('/assets/img/db-images/2559.jpg'),
        image2560 : mainUrl('/assets/img/db-images/2560.jpg'),
        image2564 : mainUrl('/assets/img/db-images/2564.jpg'),
        image2567 : mainUrl('/assets/img/db-images/2567.jpg'),
        image2578 : mainUrl('/assets/img/db-images/2578.jpg'),
        image2580 : mainUrl('/assets/img/db-images/2580.jpg'),
    },

    // POLIETILENO Y AGROTILENO
    poliAgro: {
        image2404 : mainUrl('/assets/img/db-images/2404.jpg'),
        image2413 : mainUrl('/assets/img/db-images/2413.jpg'),
        image2416 : mainUrl('/assets/img/db-images/2416.jpg'),
    },

    // PINTURAS
    pinturas: {
        // ANTIOXIDOS
        image1250 : mainUrl('/assets/img/db-images/1250.jpg'),

        // BARNIZ MARINO
        image1780 : mainUrl('/assets/img/db-images/1780.jpg'),
        image1900 : mainUrl('/assets/img/db-images/1900.jpg'),
        image1920 : mainUrl('/assets/img/db-images/1920.jpg'),
        image1930 : mainUrl('/assets/img/db-images/1930.jpg'),

        // CAL DE BLANQUEO
        image2070 : mainUrl('/assets/img/db-images/2070.jpg'),
        image2071 : mainUrl('/assets/img/db-images/2071.jpg'),

        // CIELORRASO
        image2200 : mainUrl('/assets/img/db-images/2200.jpg'),

        // CONVERTIDOR + ESMALTE
        image1700 : mainUrl('/assets/img/db-images/1700.jpg'),

        // ENTONADORES
        image1450 : mainUrl('/assets/img/db-images/1450.jpg'),

        // ESMALTE MATE
        image1760 : mainUrl('/assets/img/db-images/1760.jpg'),

        // ESMALTE SATINADO
        image1750 : mainUrl('/assets/img/db-images/1750.jpg'),

        // FONDOS Y FIJADORES
        image1392 : mainUrl('/assets/img/db-images/1392.jpg'),
        image1396 : mainUrl('/assets/img/db-images/1396.jpg'),
        image1399 : mainUrl('/assets/img/db-images/1399.jpg'),
        image1403 : mainUrl('/assets/img/db-images/1403.jpg'),
        image1414 : mainUrl('/assets/img/db-images/1414.jpg'),
        image1420 : mainUrl('/assets/img/db-images/1420.jpg'),

        // FRENTES FLEX
        image2150 : mainUrl('/assets/img/db-images/2150.jpg'),

        // LATEX AMATEUR EXTERIOR
        image2245 : mainUrl('/assets/img/db-images/2245.jpg'),

        // LATEX AMATEUR INTERIOR
        image2250 : mainUrl('/assets/img/db-images/2250.jpg'),

        // LATEX FRENTES
        image2090 : mainUrl('/assets/img/db-images/2090.jpg'),

        // LATEX INTERIOR EXTERIOR
        image2230 : mainUrl('/assets/img/db-images/2230.jpg'),

        // MEMBRANA PASTA
        image2180 : mainUrl('/assets/img/db-images/2180.jpg'),

        // PINTURA AEROSOL
        image2010 : mainUrl('/assets/img/db-images/2010.jpg'),
        image2028 : mainUrl('/assets/img/db-images/2028.jpg'),
        image2029 : mainUrl('/assets/img/db-images/2029.jpg'),
        image2030 : mainUrl('/assets/img/db-images/2030.jpg'),
        image2039 : mainUrl('/assets/img/db-images/2039.jpg'),
        image2043 : mainUrl('/assets/img/db-images/2043.jpg'),
        image2049 : mainUrl('/assets/img/db-images/2049.jpg'),
        image2051 : mainUrl('/assets/img/db-images/2051.jpg'),

        // PINTURA ASFALTICA EPOXI
        image2055 : mainUrl('/assets/img/db-images/2055.jpg'),
        image2060 : mainUrl('/assets/img/db-images/2060.jpg'),
        image2062 : mainUrl('/assets/img/db-images/2062.jpg'),

        // PINTURA EN POLVO
        image2075 : mainUrl('/assets/img/db-images/2075.jpg'),

        // PINTURA PARA PIZARRON
        image2255 : mainUrl('/assets/img/db-images/2255.jpg'),

        // TEXTUDECO VENIER
        image2154 : mainUrl('/assets/img/db-images/2154.jpg'),

        // TINTA PARA BARNIZ
        image1805 : mainUrl('/assets/img/db-images/1805.jpg'),
        image1840 : mainUrl('/assets/img/db-images/1840.jpg'),

        // LATEX PREMIUM INTERIOR EXTERIOR
        image2205 : mainUrl('/assets/img/db-images/2205.jpg'),
    }
};

module.exports = { mainUrl, images };