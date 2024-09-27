const { Productos } = require('../db.js');
const { Op } = require('sequelize');
const { mayusLetter } = require('./extraController.js');
const { mainUrl } = require('../assets/assets.js');

// -----------------------------------------------------

const getAllProductsController = async () => {
  return await Productos.findAll();
};

const getProductByIDController = async (productID) => {
  return await Productos.findByPk(productID);
};

const getProductByNameController = async (name) => {
  const productName = mayusLetter(name);
  return await Productos.findAll({
    where: { 
      name: {[Op.substring]:`${productName}`}
    }})
};
  
const getProductByCodeController = async (code) => {
  return await Productos.findAll({
    where: { 
      codigo: code
    }
  });
};

const postProductController = async ( codigo, name, price, imagen, category, descripcion, status ) => {

  if (!codigo) throw { status: 400, message: 'Porfavor agregue un código al producto' };
  if (!name) throw { status: 400, message: 'Porfavor agregue un nombre al producto' };
  if (!price) throw { status: 400, message: 'Porfavor agregue un precio al producto' };
  
  // IMAGEN POR DEFECTO SI AL PRODUCTO NO SE LE PROPORCIONA UNO
  if (!imagen) imagen = mainUrl(`/assets/img/no-photo.png`);

  const isCodeAvailable = await getProductByCodeController(codigo);
  if (isCodeAvailable.length > 0) throw { status: 409, message: 'El código de producto ingresado ya existe en la base de datos' };

  return await Productos.create({ 
    codigo, 
    name, 
    price, 
    imagen: mainUrl(`/assets/img/${imagen}`), 
    category, 
    descripcion, 
    status 
  });
};

const updateProductController = async ( id, codigo, name, price, imagen, category, descripcion, status ) => {

  const productDB = await getProductByIDController(id);
  if (!productDB) throw { status: 404, message: 'Producto no encontrado' };

  if (codigo && productDB.codigo !== codigo) {
    const isCodeAvailable = await getProductByCodeController(codigo);
    if (isCodeAvailable) throw { status: 409, message: 'El código de producto ingresado ya existe en la base de datos' };
  } else {
    codigo = productDB.codigo;
  }

  if (!name) name = productDB.name;
  if (!price) price = productDB.price;
  if (!imagen) {
    imagen = productDB.imagen;
  } else {
    imagen = mainUrl(`/assets/img/${imagen}`);
  }
  if (!category) category = productDB.category;
  if (!descripcion) descripcion = productDB.descripcion;
  if (!status) status = productDB.status;

  await productDB.update({
    codigo,
    name,
    price,
    imagen,
    category,
    descripcion,
    status
  });

  await productDB.save();
  return productDB;
};

module.exports = { 
  getAllProductsController, 
  getProductByNameController, 
  getProductByIDController,
  postProductController, 
  updateProductController,
  getProductByCodeController 
};