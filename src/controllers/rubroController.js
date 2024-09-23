const { Rubro } = require('../db.js');
const { Op } = require('sequelize');
const { mayusLetter } = require('./extraController.js');

// UTILIZAMOS EL HELPER DE CREAR TODOS LOS RUBROS SI LA BASE DE DATOS ESTA VACIA

const { createAllRubros } = require('../helper/helperRubro.js');

const addAllRubrosHelper = async () => {
    rubroDataBase = await Rubro.findAll()
    if (!rubroDataBase) await createAllRubros();
    else return;
};

const getAllRubrosController = async () => {
  return await Rubro.findAll();
};
  
const getRubroByNameController = async (name) => {
  const rubroName = mayusLetter(name);
  console.log(rubroName);
  return await Rubro.findAll({
    where: { 
      name: {[Op.substring]:`${rubroName}`}
    }}
  )
};
  
const getRubroByIDController = async (rubroID) => {
  return await Rubro.findByPk(rubroID);
};

const postRubroController = async (name, subRubro) => {
  if (!name) throw { status: 409, message: 'El rubro debe tener un nombre y no un campo vacio' };
  if (subRubro.length < 0) throw { status: 409, message: 'El rubro debe tener al menos 1 subrubro' };

  const isRubroAvailable = await getRubroByNameController(name);
  if (isRubroAvailable || isRubroAvailable.length > 0) throw { status: 409, message: 'Ya existe un rubro con ese nombre' };

  return await Rubro.create({ name, subRubro });
};

const addSubRubroController = async ( rubroID, addSub ) => {

  if (!rubroID) throw { status: 409, message: 'Error al buscar el rubro'};
  if (!addSub || addSub.length === 0) throw { status: 409, message: 'Porfavor el subrubro debe contener un nombre' };

  const findRubroDB = await getRubroByIDController(rubroID);
  if (!findRubroDB) throw { status: 409, message: 'No se pudo encontrar el rubro ingresado' };
  if (!Array.isArray(addSub)) addSub = [addSub];

  const updatedSubRubros = [...findRubroDB.subRubro, ...addSub];

  await findRubroDB.update({ subRubro: updatedSubRubros });
  await findRubroDB.save();

  return findRubroDB;
}

module.exports = {
    addAllRubrosHelper,
    getAllRubrosController,
    getRubroByNameController,
    getRubroByIDController,
    postRubroController,
    addSubRubroController,
}