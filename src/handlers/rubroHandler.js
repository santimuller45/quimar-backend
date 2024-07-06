const { getAllRubrosController, getRubroByNameController, getRubroByIDController } = require('../controllers/rubroController.js');

const handlerGetRubros = async (req, res) => {
    const { name } = req.query;
    try {
      const rubroName = name
        ? await getRubroByNameController(name)
        : await getAllRubrosController()
      if (rubroName.length < 1) throw Error('Rubro no encontrado');
      res.status(200).json(rubroName);
    } catch (error) {
      res.status(400).send(error.message);
    };  
};
  
const handlerGetRubroByID = async (req, res) => {
  const { rubroID } = req.params;
  try {
    const rubro = await getRubroByIDController(rubroID);
    if (rubro === null) throw Error('Rubro no encontrado');
    res.status(200).json(rubro);
  } catch (error) {
    res.status(400).send(error.message);
  };  
};

module.exports = {
    handlerGetRubros,
    handlerGetRubroByID
}