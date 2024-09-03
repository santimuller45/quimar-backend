const { getAllRubrosController } = require('./rubroController.js');
const { Users } = require("../db.js");
const { userAdmin } = require("../helper/helperAdmin.js");

// OBTENER EL DIA MES AÑO CON DAYJS ------->
const dayjs = require('dayjs');

const getDateFormat = () => {
  const dateNow = dayjs();
  const day = dateNow.format('DD');   // Día del mes en formato 2 dígitos
  const month = dateNow.format('MM'); // Mes en formato 2 dígitos
  const year = dateNow.format('YYYY'); // Año en formato 4 dígitos
  const hour = dateNow.format('HH');     // Hora en formato 24 horas
  const minute = dateNow.format('mm');   // Minutos en formato 2 dígitos
  const second = dateNow.format('ss');   // Segundos en formato 2 dígitos

  return `ESTAMOS EN EL DIA: ${day} MES ${month} AÑO ${year} Y LA HORA ES: ${hour} ${minute} ${second}`;
};

// <-----------------------------

const getAllSubRubrosController = async () => {
  let allSubRubros = [];
  let result = await getAllRubrosController();
  for (let cat of result) {
      allSubRubros = allSubRubros.concat(cat.subRubro);
  }
  return allSubRubros;
};

// CREAMOS EL ADMIN POR DEFAULT EN LA DB
const createAdmin = async () => {
  return await Users.create( userAdmin )
};
// <--------

// FUNCION PARA TRANSFORMAR A MAYUS UN STRING ----->
const mayusLetter = (string) => string.toUpperCase();
//<-------

const infoUser = (data) => {

  return {
    email: data.email,
    name: data.name,
    cuit: data.cuit,
    address: data.address,
    postalCode: data.postalCode,
    city: data.city,
    state: data.state,
    phone: data.phone,
    userStatus: data.userStatus,
    admin: data.admin
  }
};


module.exports = { getDateFormat, getAllSubRubrosController, infoUser, createAdmin, mayusLetter };