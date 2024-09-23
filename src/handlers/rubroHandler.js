const { 
  getAllRubrosController, 
  getRubroByNameController, 
  getRubroByIDController, 
  postRubroController, 
  addSubRubroController 
} = require('../controllers/rubroController.js');

const handlerGetRubros = async (req, res) => {
    const { name } = req.query;
    try {
      const rubroName = name
        ? await getRubroByNameController(name)
        : await getAllRubrosController()
      if (!rubroName || rubroName.length === 0) return res.status(404).json({ message: 'Rubro no encontrado' });
      res.status(200).json(rubroName);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    };  
};
  
const handlerGetRubroByID = async (req, res) => {
  const { rubroID } = req.params;
  try {
    const rubro = await getRubroByIDController(rubroID);
    if (rubro === null) throw Error('Rubro no encontrado');
    res.status(200).json(rubro);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  };  
};

const handlerCreateRubro = async (req, res) => {
  const { name, subRubro } = req.body;
  try {
    await postRubroController(name, subRubro);
    res.status(201).json({ message:'Rubro creado exitosamente!'});
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const handlerAddSubRubro = async (req, res) => {
  const { rubroID, addSub } = req.body;
  try {
    const rubroUpdated = await addSubRubroController(rubroID, addSub);
    res.status(200).json({ message: 'Rubro actualizado exitosamente!', rubro: rubroUpdated });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};


module.exports = {
  handlerGetRubros,
  handlerGetRubroByID,
  handlerCreateRubro,
  handlerAddSubRubro
};