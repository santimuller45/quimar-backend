const { Productos } = require('../db.js');
const { Op } = require('sequelize');

// ---- AUX FUNCTIONS ----
const { mayusLetter } = require('./extraController.js');
const { mainUrl } = require('../assets/assets.js');
// -----------------------

// ---- IMAGEKIT ----
const imagekit = require('../utils/imageKitConfig.js');
// ------------------

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
      name: { [Op.substring]: `${productName}` }
    }
  })
};

const getProductByCodeController = async (code) => {
  return await Productos.findAll({
    where: {
      codigo: code
    }
  });
};

const postProductController = async (productData, uploadedImage) => {
  const transaction = await Productos.sequelize.transaction();
  try {
    const { codigo, name, price, category, descripcion, status } = productData;

    if (!codigo) throw { status: 400, message: 'Porfavor agregue un código al producto' };
    if (!name) throw { status: 400, message: 'Porfavor agregue un nombre al producto' };
    if (!price || isNaN(parseFloat(price))) throw { status: 400, message: 'Porfavor agregue un precio al producto' };

    // IMAGEN POR DEFECTO SI AL PRODUCTO NO SE LE PROPORCIONA UNO
    const noImageURL = 'https://imagekit.io/public/share/xvms3cln5/b5819518ef0ad59c61abd0a820e8ce2ea9575bde9a1295307b9ebd82f929d0c5c8f3104cb8316601726157d046b226c71af59dfabb2227b72d135d6f57e7bed6c09023152d16bb845e2094b552f06044';
    const imageURL = uploadedImage?.url || noImageURL;

    const isCodeAvailable = await getProductByCodeController(codigo);
    if (isCodeAvailable.length > 0) throw { status: 409, message: 'El código de producto ingresado ya existe en la base de datos' };

    const newProduct = await Productos.create({
      codigo,
      name,
      price,
      imagen: imageURL,
      category,
      descripcion,
      status
    }, { transaction });

    await transaction.commit(); // Confirma transacción
    return newProduct;

  } catch (error) {
    await transaction.rollback(); // Revertir cambios si hay error
    throw { status: error.status || 400, message: error.message || 'Error al crear el producto' };
  }
};

const updateProductController = async (productData, uploadedImage) => {

  const transaction = await Productos.sequelize.transaction();
  try {
    const { id, codigo, name, price, category, descripcion, status } = productData;

    const productDB = await getProductByIDController(id);
    if (!productDB) throw { status: 404, message: 'Producto no encontrado' };

    if (codigo && productDB.codigo !== codigo) {
      const isCodeAvailable = await getProductByCodeController(codigo);
      if (isCodeAvailable.length > 0) throw { status: 409, message: 'El código de producto ingresado ya existe en la base de datos' };
    }

    const imageURL = uploadedImage?.url || productDB.imagen;

    const updatedProduct = {
      codigo: codigo !== undefined ? codigo : productDB.codigo,
      name: name !== undefined ? name : productDB.name,
      price: price !== undefined ? price : productDB.price,
      imagen: imageURL,
      category: category !== undefined ? category : productDB.category,
      descripcion: descripcion !== undefined ? descripcion : productDB.descripcion,
      status: status !== undefined ? status : productDB.status
    }

    await productDB.update(updatedProduct, { transaction });
    await transaction.commit();
    return await getProductByIDController(productDB.id);
  } catch (error) {
    await transaction.rollback(); // Revertir cambios si hay error
    throw { status: error.status || 400, message: error.message || 'Error al actualizar el producto' };
  }
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