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

module.exports = { getDateFormat };