const { Productos } = require('../db.js');
const { Op } = require('sequelize');
const { mayusLetter } = require('./extraController.js');

// -----------------------------------------------------

const getAllProductsController = async () => {
  return await Productos.findAll();
};
  
const getProductByNameController = async (name) => {
  const productName = mayusLetter(name);
  return await Productos.findAll({
    where: { 
      name: {[Op.substring]:`${productName}`}
    }})
};
  
const getProductByIDController = async (productID) => {
  return await Productos.findByPk(productID);
};

const getProductByCodeController = async (code) => {
  return await Productos.findOne({
    where: { 
      codigo: code  
    }
  });
};

const postProductController = async ( codigo, name, price, imagen, category, descripcion, status ) => {

  if (!codigo) throw Error('Porfavor agregue un código al producto');
  if (!name) throw Error('Porfavor agregue un nombre al producto');
  if (!price) throw Error('Porfavor agregue un precio al producto');

  const isCodeAvailable = await getProductByCodeController(codigo);
  if (isCodeAvailable) throw new Error('Ya existe ese codigo en los productos');

  return await Productos.create({ 
    codigo, 
    name, 
    price, 
    imagen, 
    category, 
    descripcion, 
    status 
  });
};

const updateProductController = async ( id, codigo, name, price, imagen, category, descripcion, status ) => {

  const productDB = await getProductByIDController(id);
  if (productDB === null) throw Error('Producto no encontrado');

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
}

module.exports = { 
  getAllProductsController, 
  getProductByNameController, 
  getProductByIDController,
  postProductController, 
  updateProductController,
  getProductByCodeController 
}