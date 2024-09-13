const subRubroFerr05 = 'Tornillos';
const { 
    image5100,
    image5200, 
    image5240,
    image5300,
 } = require('../../assets/assets.js');

const listaTornillos = [
    {
        codigo: 5100,
        name: "TORNILLO FIX CABEZA PHILLIPS PUNTA AGUJA 3.5x12 x 400U.",
        price: 5489.60,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5105,
        name: "TORNILLO FIX CABEZA PHILLIPS PUNTA AGUJA 3.5x16 x 200u.",
        price: 3008.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5110,
        name: "TORNILLO FIX CABEZA PHILLIPS PUNTA AGUJA 3.5x20 x 200u.",
        price: 3360.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5115,
        name: "TORNILLO FIX CABEZA PHILLIPS PUNTA AGUJA 3.5x25 x 200u.",
        price: 3600.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5120,
        name: "TORNILLO FIX CABEZA PHILLIPS PUNTA AGUJA 3.5x30 x 200u.",
        price: 3920.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5130,
        name: "TORNILLOS FIX CABE. PHILLIPS PUN. AGUJA 4.5x30 x 200u.",
        price: 4880.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5132,
        name: "TORNILLOS FIX CABE. PHILLIPS PUN. AGUJA 4.5x35 x 200u.",
        price: 5536.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5134,
        name: "TORNILLO FIX CABE. PHILLIPS PUN. AGUJA 4.5x40 x 200u.",
        price: 6192.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5136,
        name: "TORNILLOS FIX CABE. PHILLIPS PUN. AGUJA 4.5x45 x 200u.",
        price: 7152.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5137,
        name: "TORNILLO FIX CABEZA PHILLIPS PUNTA AGUJA 4.5x50 x 200u.",
        price: 8624.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5138,
        name: "TORNILLO FIX CABEZA PHILLIPS PUNTA AGUJA 5.0x40 x 200u.",
        price: 8160.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5139,
        name: "TORNILLO FIX CABEZA PHILLIPS PUNTA AGUJA 5.0x50 x 200u.",
        price: 9520.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5140,
        name: "TORNILLO FIX CABEZA PHILLIPS PUNTA AGUJA 5.0x60 x 200u.",
        price: 10800.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5150,
        name: "TORNILLOS FIX CABEZA PHILLIPS PUNTA AGUJA 6.0x60 x 200u.",
        price: 17680.00,
        imagen: image5100,
        descripcion: "Los tornillos con cabeza Phillips y punta aguja son ideales para fijar materiales en superficies de madera, plástico y metal. Su diseño facilita la penetración en distintos materiales.",
        category: subRubroFerr05
    },
    {
        codigo: 5200,
        name: "TORNILLO CABEZA TANQUE PUNTA AGUJA 8x1/2 ( T1 ) x 400u.",
        price: 7728.00,
        imagen: image5200,
        descripcion: "Los tornillos con cabeza de tanque y punta aguja son ideales para fijar materiales en superficies de madera y metal. Su diseño proporciona una sujeción segura y duradera.",
        category: subRubroFerr05
    },
    {
        codigo: 5205,
        name: "TORNILLO CABEZA TANQUE PUNTA AGUJA 8x9/16 ( T1 ) x 200u.",
        price: 8512.00,
        imagen: image5200,
        descripcion: "Los tornillos con cabeza de tanque y punta aguja son ideales para fijar materiales en superficies de madera y metal. Su diseño proporciona una sujeción segura y duradera.",
        category: subRubroFerr05
    },
    {
        codigo: 5210,
        name: "TORNILLO CABEZA TANQUE PUNTA AGUJA 8x3/4 ( T 1 ) x 200u.",
        price: 4624.00,
        imagen: image5200,
        descripcion: "Los tornillos con cabeza de tanque y punta aguja son ideales para fijar materiales en superficies de madera y metal. Su diseño proporciona una sujeción segura y duradera.",
        category: subRubroFerr05
    },
    {
        codigo: 5212,
        name: "TORNILLOS CABEZA TANQUE PUNTA AGUJA 8x1 x 200u.",
        price: 5680.00,
        imagen: image5200,
        descripcion: "Los tornillos con cabeza de tanque y punta aguja son ideales para fijar materiales en superficies de madera y metal. Su diseño proporciona una sujeción segura y duradera.",
        category: subRubroFerr05
    },
    {
        codigo: 5240,
        name: "TORNILLO CABEZA TANQUE PUNTA MECHA 8 X 3/4",
        price: 6080.00,
        imagen: image5240,
        descripcion: "Los tornillos con cabeza de tanque y punta mecha son ideales para fijar materiales en superficies de madera y metal. Su diseño proporciona una sujeción segura y duradera.",
        category: subRubroFerr05
    },
    {
        codigo: 5242,
        name: "TORNILLO TANQUE PUNTA MECHA 8 X 1",
        price: 6960.00,
        imagen: image5240,
        descripcion: "Los tornillos con cabeza de tanque y punta mecha son ideales para fijar materiales en superficies de madera y metal. Su diseño proporciona una sujeción segura y duradera.",
        category: subRubroFerr05
    },
    {
        codigo: 5300,
        name: "TORNILLO DRYWALL PUNTA AGUJA ROS. METAL 6 X 1\" 200u.",
        price: 4000.00,
        imagen: image5300,
        descripcion: "Los tornillos para drywall con punta aguja y rosca para metal son ideales para la instalación de paneles de yeso en estructuras de metal. Su diseño proporciona una sujeción firme y duradera.",
        category: subRubroFerr05
    },
    {
        codigo: 5302,
        name: "TORNILLO DRYWALL PUN. AGUJA ROS. METAL 6 x 1 1/2 x 200 u.",
        price: 4992.00,
        imagen: image5300,
        descripcion: "Los tornillos para drywall con punta aguja y rosca para metal son ideales para la instalación de paneles de yeso en estructuras de metal. Su diseño proporciona una sujeción firme y duradera.",
        category: subRubroFerr05
    }
];

module.exports = { listaTornillos, subRubroFerr05 };