// const { getAllMenuController, getFoodByNameController, getFoodByIDController, postFoodController, putFoodController } = require('../controllers/foodControllers.js');
const { getAllProductsController, getProductByNameController, getProductByIDController, postProductController, updateProductController } = require('../controllers/productosController.js');

const handlerGetProducts = async (req, res) => {
    const { name } = req.query;
    try {
      const productName = name 
        ? await getProductByNameController(name)
        : await getAllProductsController()
      if (productName.length < 1) throw Error('Producto no encontrado');
      res.status(200).json(productName);
    } catch (error) {
      res.status(400).send(error.message);
    };  
};

// const handlerGetProductByCodigo = async (req, res) => {
//   const { code } = req.query;
//   try {
//     const findProduct = await getProductByCodigoController(code);
//     if (!findProduct) throw Error('Producto no encontrado');
//     res.status(200).json(findProduct);
//   } catch (error) {
//     res.status(400).send(error.message);
//   };  
// };
  
const handlerGetProductByID = async (req, res) => {
  const { productID } = req.params;
  try {
    const product = await getProductByIDController(productID);
    if (product === null) throw Error('Producto no encontrado');
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  };  
};

  const handlerPostProduct = async (req, res) => {
    try {
      const { codigo, name, price, imagen, category, descripcion, status } = req.body;
      const result = await postProductController( codigo, name, price, imagen, category, descripcion, status );
      if (result === null) throw Error('No se puede crear el producto');
      res.status(200).send('Producto creado exitosamente!');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  const handlerPutProduct = async (req, res) => {
    const { id ,codigo, name, price, imagen, category, descripcion, status } = req.body;
    try {
      const newStatusFood = await updateProductController( id, codigo, name, price, imagen, category, descripcion, status );
      if (newStatusFood === null) throw Error('No se pudo actualizar el producto o no se encontró');
      res.status(200).send('Producto actualizado exitosamente!');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  module.exports = { handlerGetProducts, handlerGetProductByID, handlerPostProduct, handlerPutProduct };