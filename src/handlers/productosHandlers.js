// const { getAllMenuController, getFoodByNameController, getFoodByIDController, postFoodController, putFoodController } = require('../controllers/foodControllers.js');
const { getAllProductsController, getProductByNameController, getProductByIDController } = require('../controllers/productosController.js')

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

//   const handlerPostFood = async (req, res) => {
//     const food = req.body;
//     try {
//       const result = await postFoodController(food);
//       if (result === null) throw Error('Could not create food');
//       res.status(200).send('Food created successfully');
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   };

//   const handlerPutFood = async (req, res) => {
//     const food = req.body;
//     try {
//       const newStatusFood = await putFoodController(food);
//       if (newStatusFood === null) throw Error('Could not update food or food not found');
//       res.status(200).send('Food modified successfully');
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   };

  module.exports = { handlerGetProducts, handlerGetProductByID };