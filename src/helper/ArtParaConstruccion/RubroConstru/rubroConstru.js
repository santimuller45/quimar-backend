const { Rubro } = require('../../../db.js');

const { subRubroArtContr01 } = require('../calYesoCemento.js');
const { subRubroArtContr02 } = require('../ferrites.js');
const { subRubroArtContr03 } = require('../klaukol.js');
const { subRubroArtContr04 } = require('../sika.js');
const { subRubroArtContr05 } = require('../supertech.js');

const rubroArtConstru = {
    name:"ARTICULOS PARA LA CONSTRUCCION",
    subRubro: [ 
        subRubroArtContr01, 
        subRubroArtContr02,
        subRubroArtContr03,
        subRubroArtContr04,
        subRubroArtContr05
    ]
};

module.exports = { rubroArtConstru };