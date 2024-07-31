const { Productos } = require('../db.js');
const { Op } = require('sequelize');

// FUNCION PARA TRANSFORMAR A MAYUS UN STRING ----->
const mayusLetter = (string) => string.toUpperCase();
//<-------

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

// const postFoodController = async (food) => {
//   return await Foods.create(food);
// };

// const putFoodController = async ( food ) => {
//   const findFoodByID = await Foods.findByPk(food.id);
//   if (findFoodByID === null) return null;
//   food.name ? findFoodByID.name = food.name : null;
//   food.image ? findFoodByID.image = food.image : null;
//   food.description ? findFoodByID.description = food.description : null;
//   food.price ? findFoodByID.price = food.price : null;
//   food.status ? findFoodByID.status = food.status : null;
//   findFoodByID.save();
//   return findFoodByID;
// }

module.exports = { getAllProductsController, getProductByNameController, getProductByIDController }