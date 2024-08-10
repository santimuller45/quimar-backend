require('dotenv').config();
const { DB_HOST, PORT } = process.env;
const mainUrl = (path) => `http://${DB_HOST}:${PORT}${path}`;

// IMAGEN NO DISPONIBLE -->
const noImageDefault = mainUrl('/assets/img/no-photo.png');
// <-----------------------

// URLS DE LOS PRODUCTOS ----->

// PRODUCTOS PARA PILETAS
const imageCloro5lt = mainUrl('/assets/img/piletas/cloro80.png');
const imageSulfatoCobre = mainUrl('/assets/img/piletas/sulfatodecobre.png');

// QUIMICOS Y DILUYENTES

// ACEITES
const imageLino900cc = mainUrl('/assets/img/aceites/aceitelino.png');
const imageLino5lt = mainUrl('/assets/img/aceites/aceitelino5lt.png');

// DILUYENTES
const imageAguarras900cc = mainUrl('/assets/img/diluyentes/aguarras.png');
const imageAguarras5lt = mainUrl('/assets/img/diluyentes/aguarras5lt.png');
const imageKerosene900cc = mainUrl('/assets/img/diluyentes/kerosene.png');
const imageKerosene5lt = mainUrl('/assets/img/diluyentes/kerosene5lt.png');
const imageSolventeInd = mainUrl('/assets/img/diluyentes/solventeindustrial.png');
const imageThinner900cc = mainUrl('/assets/img/diluyentes/thinner.png');
const imageThinner5lt = mainUrl('/assets/img/diluyentes/thinner5lt.png');
const imageThinnerOro900cc = mainUrl('/assets/img/diluyentes/thinneroro.png');
const imageThinnerOro5lt = mainUrl('/assets/img/diluyentes/thinneroro5lt.png');

// QUIMICOS
const imageAcidoM900cc = mainUrl('/assets/img/quimicos/acidomuriatico.png');
const imageAcidoM5lt = mainUrl('/assets/img/quimicos/acidomuriatico5lt.png');
const imageDestapaC = mainUrl('/assets/img/quimicos/destapacañeria.png');
const imageSodaC = mainUrl('/assets/img/quimicos/sodacaustica.png');

// ZINGUERIA

// CABALLETES
const imageCaballetes = mainUrl('/assets/img/zingueria/caballete.jpg');

// CANALETAS Y ACC TECHOS
const imageCanaletaMediaCaña = mainUrl('/assets/img/zingueria/canaletas.jpg');
const imageCabeceraMediaCaña = mainUrl('/assets/img/zingueria/cabecera.jpg');
const imageBoquetaMediaCaña = mainUrl('/assets/img/zingueria/boqueta.jpg');
const imageIntermediaMediaCaña = mainUrl('/assets/img/zingueria/intermediamediacaña.jpg');
const imageSoporteMediaCaña = mainUrl('/assets/img/zingueria/soportemediacaña.jpg');
const imageEsquineroMediaCaña = mainUrl('/assets/img/zingueria/esqmediacaña.jpg');
const imageRinconeroMediaCaña = mainUrl('/assets/img/zingueria/rinconero.jpg');

// CAÑOS Y ACC GALVANIZADOS
const imageCañoGalv = mainUrl('/assets/img/zingueria/cañogalv.jpg');
const imageCurva45Corrugada = mainUrl('/assets/img/zingueria/cañocorrugado.jpg');
const imageCurva90Corrugada = mainUrl('/assets/img/zingueria/curvacorrugada.jpg');
const imageCurvaArticulada = mainUrl('/assets/img/zingueria/curvaarticulada.jpg');
const imageSombreroH = mainUrl('/assets/img/zingueria/sombrerotipoh.jpg');
const imageSombreroDobleAro = mainUrl('/assets/img/zingueria/sombrerodoblearo.jpg');
const imagePollerita = mainUrl('/assets/img/zingueria/pollerita.jpg');

// CAÑOS Y ACC SALAMANDRA
const imageCañoNegro = mainUrl('/assets/img/zingueria/cañonegro.jpg');
const imageCodoCorto = mainUrl('/assets/img/zingueria/codocorto.jpg');

// CENEFAS
const imageCenefas = mainUrl('/assets/img/zingueria/cenefas.jpg');

// GRAMPAS
const imageOmega = mainUrl('/assets/img/zingueria/grampasomega.jpg');
const imageDektite200 = mainUrl('/assets/img/zingueria/dektite200.jpg');
const imageDektite400 = mainUrl('/assets/img/zingueria/dektite400.jpg');

// REDUCC GALVANIZADAS
const imageReducGalv = mainUrl('/assets/img/zingueria/reducciongalvanizada.jpg');

// <----------------------------------------------

module.exports = {
    noImageDefault, imageCloro5lt, imageSulfatoCobre, imageLino900cc, imageLino5lt, imageAguarras900cc,
    imageAguarras5lt, imageKerosene900cc, imageKerosene5lt, imageSolventeInd, imageThinner900cc, imageThinner5lt,
    imageThinnerOro900cc, imageThinnerOro5lt, imageAcidoM900cc, imageAcidoM5lt, imageDestapaC, imageSodaC,
    imageCaballetes, imageCanaletaMediaCaña, imageCabeceraMediaCaña, imageBoquetaMediaCaña, imageIntermediaMediaCaña, 
    imageSoporteMediaCaña, imageEsquineroMediaCaña, imageRinconeroMediaCaña, imageCañoGalv, imageCurva45Corrugada,
    imageCurva90Corrugada, imageCurvaArticulada, imageSombreroH, imageSombreroDobleAro, imagePollerita,
    imageCañoNegro, imageCodoCorto, imageCenefas, imageOmega, imageDektite200, imageDektite400, imageReducGalv,
};