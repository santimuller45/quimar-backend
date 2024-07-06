const { Rubro } = require('../db.js');
const { Op } = require('sequelize');

// UTILIZAMOS EL HELPER DE CREAR TODOS LOS RUBROS SI LA BASE DE DATOS ESTA VACIA

const { createAllRubros } = require('../helper/helperRubro.js');

const addAllRubrosHelper = async () => {
    rubroDataBase = await Rubro.findAll()
    if (!rubroDataBase) await createAllRubros();
    else return;
};

const mayusLetter = (string) => string.toUpperCase();
////////////////////////////////////////////////////////////////////

const getAllRubrosController = async () => {
  return await Rubro.findAll();
};
  
const getRubroByNameController = async (name) => {
  const rubroName = mayusLetter(name);
  return await Rubro.findAll({
    where: { 
      name: {[Op.substring]:`${rubroName}`}
    }})
};
  
const getRubroByIDController = async (rubroID) => {
  return await Rubro.findByPk(rubroID);
};

module.exports = {
    addAllRubrosHelper,
    getAllRubrosController,
    getRubroByNameController,
    getRubroByIDController
}