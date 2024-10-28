const { getDatesForOrders } = require('../controllers/extraController.js');


const handlerGetDate =  (req, res) => {
    try {
      const dateNow = getDatesForOrders();
      if (dateNow) res.status(200).json(dateNow);
      else throw Error('Error de fecha')
    } catch (error) {
      res.status(400).send(error.message);
    }
};

module.exports = { handlerGetDate };