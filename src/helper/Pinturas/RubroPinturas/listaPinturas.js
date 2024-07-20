const { listaConvertidorYAntioxidosParaSuperficies } = require ('../antioxidos.js');
const { listaBarnizMarinoNetcolor } = require ('../barnizMarino.js');
const { listaCalDeBlanqueo } = require ('../calDeBlanqueo.js');
const { listaCielorrasoNetcolor } = require ('../cielorraso.js');
const { listaConvertidorConEsmalteNetcolor } = require ('../convertidorEsmalte.js');
const { listaEntonadorUniversal } = require ('../entonadores.js');
const { listaEsmalteSinteticoMateNetcolor } = require ('../esmalteMate.js');
const { listaEsmalteSatinadoNetcolor } = require ('../esmalteSatinado.js');
const { listaEsmalteSinteticoNetcolor } = require ('../esmalteSintetico.js');
const { listaFondosYFijadoresDeSuperficies } = require ('../fijadores.js');
const { listaFrentesFlexNetcolor } = require ('../frentesFlex.js');
const { listaLatexAmateurExterior } = require ('../latexAmateurExterior.js');
const { listaLatexAmateurInterior } = require ('../latexAmateurInterior.js');
const { listaLatexInteriorExteriorNetcolor } = require ('../latexInteriorExterior.js');
const { listaMembranaEnPastaMiColor } = require ('../membranaPasta.js');
const { listaPinturasEnAerosol } = require ('../pinturaAerosol.js');
const { listaPinturaAsfalticaYEpoxi } = require ('../pinturaAsfalticaEpoxi.js');
const { listaPinturaEnPolvo } = require ('../pinturaEnPolvo.js');
const { listaLatexFrentesNetcolor } = require ('../latexFrentes.js');
const { listaPinturaParaPizarronYAltaTemp } = require ('../pinturaParaPizarronYAltaTemp.js');
const { listaPremiumBaseTransparenteNetcolor } = require ('../premiumBaseTransparente.js');
const { listaPremiumInteriorLavableNetcolor } = require ('../premiumInteriorLavable.js');
const { listaPremiumPlusSatinadoNetcolor } = require ('../premiumPlusSatinado.js');
const { listaTechosFlexNetcolor } = require ('../techosFlex.js');
const { listaTextudecorVenierTipoRevear } = require ('../textudecorVenier.js');
const { listaTintaParaBarnizNetcolor } = require ('../tintaParaBarniz.js');

const listProducts07 = [ 
    ...listaConvertidorYAntioxidosParaSuperficies,
    ...listaBarnizMarinoNetcolor, 
    ...listaCalDeBlanqueo, 
    ...listaCielorrasoNetcolor, 
    ...listaConvertidorConEsmalteNetcolor,
    ...listaEntonadorUniversal,
    ...listaEsmalteSinteticoMateNetcolor, 
    ...listaEsmalteSatinadoNetcolor, 
    ...listaEsmalteSinteticoNetcolor, 
    ...listaFondosYFijadoresDeSuperficies,
    ...listaFrentesFlexNetcolor, 
    ...listaLatexAmateurExterior, 
    ...listaLatexAmateurInterior,
    ...listaLatexInteriorExteriorNetcolor, 
    ...listaMembranaEnPastaMiColor, 
    ...listaPinturasEnAerosol, 
    ...listaPinturaAsfalticaYEpoxi, 
    ...listaPinturaEnPolvo,
    ...listaLatexFrentesNetcolor, 
    ...listaPinturaParaPizarronYAltaTemp, 
    ...listaPremiumBaseTransparenteNetcolor,
    ...listaPremiumInteriorLavableNetcolor, 
    ...listaPremiumPlusSatinadoNetcolor, 
    ...listaTechosFlexNetcolor,
    ...listaTextudecorVenierTipoRevear, 
    ...listaTintaParaBarnizNetcolor
];

module.exports = { listProducts07 };