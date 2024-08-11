const { subRubroAccPintura01 } = require('../bandejasPintorYAcc.js');
const { subRubroAccPintura02 } = require('../lijasYAbrasivos.js');
const { subRubroAccPintura03 } = require('../miniRodillosCoati.js');
const { subRubroAccPintura04 } = require('../pincelesCoati.js');
const { subRubroAccPintura05 } = require('../pincelesCoatiLumar.js');
const { subRubroAccPintura06 } = require('../rodillosCoatiLumar.js');


const rubroAccParaPintura = {
    name: "Accesorios para Pintura",
    subRubro: [subRubroAccPintura01, subRubroAccPintura02, subRubroAccPintura03, subRubroAccPintura04, subRubroAccPintura05, subRubroAccPintura06 ]
};


module.exports = { rubroAccParaPintura };