const { Productos } = require('../db.js');
const { Op } = require('sequelize');
const { mayusLetter } = require('./extraController.js');
const { mainUrl } = require('../assets/assets.js');

// -----------------------------------------------------

const getAllProductsController = async () => {
  return await Productos.findAll({
    order: [
      ['codigo', 'ASC'] // Ordenar por 'codigo' de forma ascendente
    ]
  });
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
  if (!price || isNaN(parseFloat(price))) throw { status: 400, message: 'Porfavor agregue un precio al producto' };
  
  // IMAGEN POR DEFECTO SI AL PRODUCTO NO SE LE PROPORCIONA UNO
  if (!imagen) imagen = 'no-photo.png';

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
    if (isCodeAvailable.length > 0) throw { status: 409, message: 'El código de producto ingresado ya existe en la base de datos' };
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

const updatePricesProductsController = async (form) => {
  const { productsList, valueType, value } = form;
  const modifier = valueType === "aumentar" ? 1 + value / 100 : 1 - value / 100;

  if (!productsList || productsList.length === 0) throw new Error("No hay productos seleccionados para actualizar");

  // Inicia una transacción
  const transaction = await Productos.sequelize.transaction();

  try {
      await Promise.all(
          productsList.map(async (product) => {
              const findProduct = await Productos.findByPk(product.id, { transaction });
              if (!findProduct) {
                  console.warn(`Producto con ID ${product.id} no encontrado`);
                  return;
              }
              const newPrice = Number((findProduct.price * modifier).toFixed(2));
              await findProduct.update({ price: newPrice }, { transaction });
          })
      );

      // Confirma la transacción
      await transaction.commit();
      return "Precios actualizados correctamente";
  } catch (error) {
      // Si ocurre un error, deshace la transacción
      await transaction.rollback();
      throw new Error("Error al actualizar precios: " + error.message);
  }
};


module.exports = { 
  getAllProductsController, 
  getProductByNameController, 
  getProductByIDController,
  postProductController, 
  getProductByCodeController,
  updateProductController,
  updatePricesProductsController 
};