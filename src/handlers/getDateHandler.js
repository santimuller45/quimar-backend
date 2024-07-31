const { getDateFormat } = require('../controllers/getDateController.js')

const handlerGetDate =  (req, res) => {
    try {
      const dateNow = getDateFormat();
      if (dateNow) res.status(200).json(dateNow);
      else throw Error('Error de fecha')
    } catch (error) {
      res.status(400).send(error.message);
    }
};

module.exports = { handlerGetDate };