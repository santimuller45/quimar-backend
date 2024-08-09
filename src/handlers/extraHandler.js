const { getDateFormat, getAllSubRubrosController } = require('../controllers/extraController.js');


const handlerGetDate =  (req, res) => {
    try {
      const dateNow = getDateFormat();
      if (dateNow) res.status(200).json(dateNow);
      else throw Error('Error de fecha')
    } catch (error) {
      res.status(400).send(error.message);
    }
};

const handlerGetSubRubros = async (req, res) => {
  try {
    const subRubro = await getAllSubRubrosController();
    res.status(200).json(subRubro);
  } catch (error) {
    res.status(400).send(error.message);
  };  
};

module.exports = { handlerGetDate, handlerGetSubRubros };