const subRubro = 'Barniz Marino Netcolor';
const imageURL = 'URL';

const listaBarnizMarinoNetcolor = [
    /// BRILLANTE
    { price: 2541.93, codigo: 1780, name: "BARNIZ MARINO BRILLANTE Ext./Int. x 1/4l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 3799.49, codigo: 1781, name: "BARNIZ MARINO BRILLANTE Ext./Int. x 1/2l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 5960.05, codigo: 1782, name: "BARNIZ MARINO BRILLANTE Ext./Int. x 1l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 20634.83, codigo: 1783, name: "BARNIZ MARINO BRILLANTE Ext./Int. x 4lts.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 130762.35, codigo: 1784, name: "BARNIZ MARINO BRILLANTE Ext./Int. x 20lts.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    ///SATINADO
    { price: 2554.53, codigo: 1785, name: "BARNIZ MARINO SATINADO Ext./Int. x 1/4l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 3801.07, codigo: 1786, name: "BARNIZ MARINO SATINADO Ext./Int. x 1/2l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 5990.00, codigo: 1787, name: "BARNIZ MARINO SATINADO Ext./Int. x 1l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 20735.69, codigo: 1788, name: "BARNIZ MARINO SATINADO Ext./Int. x 4lts.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 102534.98, codigo: 1789, name: "BARNIZ MARINO SATINADO Ext./Int. x 20lts.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    /// MATE
    { price: 2598.66, codigo: 1790, name: "BARNIZ MARINO MATE Ext./Int. x 1/4l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 3914.54, codigo: 1791, name: "BARNIZ MARINO MATE Ext./Int. x 1/2l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 6196.44, codigo: 1792, name: "BARNIZ MARINO MATE Ext./Int. x 1l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 21599.29, codigo: 1793, name: "BARNIZ MARINO MATE Ext./Int. x 4lts.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 130757.55, codigo: 1794, name: "BARNIZ MARINO MATE Ext./Int. x 20lts.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    /// C/FILTRO UV
    { price: 3326.43, codigo: 1795, name: "BARNIZ MARINO c/filtro UV Ext./Int. x1/4l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 4960.46, codigo: 1796, name: "BARNIZ MARINO c/filtro UV Ext./Int. x1/2l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 7788.34, codigo: 1797, name: "BARNIZ MARINO c/filtro UV Ext./Int. x1l.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 26946.64, codigo: 1798, name: "BARNIZ MARINO c/filtro UV Ext./Int. x4lts.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    /// LASUR
    { price: 9639.00, codigo: 1900, name: "LASUR PARA MADERAS VENIER NATURAL X 1 LT.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 38250.00, codigo: 1901, name: "LASUR PARA MADERAS VENIER NATURAL X 4 LTS.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 9639.00, codigo: 1903, name: "LASUR PARA MADERAS VENIER CRISTAL X1", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 38250.00, codigo: 1904, name: "LASUR PARA MADERAS VENIER CRISTAL X 4", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 9639.00, codigo: 1905, name: "LASUR PARA MADERAS VENIER CEDRO X 1 LT.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 38250.00, codigo: 1906, name: "LASUR PARA MADERAS VENIER CEDRO X 4 LTS.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 9639.00, codigo: 1910, name: "LASUR PARA MADERAS VENIER ROBLE OSCURO X 1 LT.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 38250.00, codigo: 1911, name: "LASUR PARA MADERAS VENIER ROBLE OSCURO X 4 LTS.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 38250.00, codigo: 1912, name: "LASUR PARA MADERAS VENIER CAOBA X 4 LTS.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 9639.00, codigo: 1913, name: "LASUR PARA MADERAS VENIER CAOBA X 1 LT", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 9639.00, codigo: 1914, name: "LASUR PARA MADERAS VENIER NOGAL X 1 LT", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 38250.00, codigo: 1915, name: "LASUR PARA MADERAS VENIER NOGAL X 4 LTS.", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    /// SIMIL MADERA
    { price: 29280.00, codigo: 1920, name: "SIMIL MADERA CAOBA X 750 cc", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 29280.00, codigo: 1921, name: "SIMIL MADERA CEDRO X 750 cc", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    { price: 29280.00, codigo: 1922, name: "SIMIL MADERA ROBLE CLARO X 750 cc", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro},
    /// LACA MEGACRILICA
    { price: 8678.57, codigo: 1930, name: "LACA MEGACRILICA BRILLANTE X 1 L", imagen: imageURL, descripcion: 'Descripción del producto', category: subRubro}
];

module.exports = listaBarnizMarinoNetcolor;