const { Users } = require("../db.js");
const { dev, admin } = require("../helper/helperAdmin.js");

// LIBRERIA BCRYPT PARA HASHEAR LAS CONTRASEÑAS ----->
const bcrypt = require('bcrypt');

// Hashear una contraseña
const hashPassword = async (password) => {
    const saltRounds = 10; // Número de rondas para el hashing
    return await bcrypt.hash(password, saltRounds);
};

// Comparar una contraseña ingresada con una hasheada
const compareHash = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};
// <-------------------------------------------

// LIBRERIA DAYJS PARA OBTENER DIA/MES/AÑO HORA/MINUTOS/SEGUNDOS ACTUALES ------->
const dayjs = require('dayjs');

const getDateFormat = () => {
  const dateNow = dayjs();
  const day = dateNow.format('DD');   // Día del mes en formato 2 dígitos
  const month = dateNow.format('MM'); // Mes en formato 2 dígitos
  const year = dateNow.format('YYYY'); // Año en formato 4 dígitos
  const hour = dateNow.format('HH');     // Hora en formato 24 horas
  const minute = dateNow.format('mm');   // Minutos en formato 2 dígitos
  const second = dateNow.format('ss');   // Segundos en formato 2 dígitos

  return {
    day,
    month,
    year,
    hour,
    minute,
    second
  }
};

// <-----------------------------

// CREAMOS EL ADMIN POR DEFAULT EN LA DB
const createAdmin = async () => {

  let hashedDevPassword = await hashPassword(dev.password);
  let hashedAdminPassword = await hashPassword(admin.password);

  await Users.create({
    email: dev.email, 
    password: hashedDevPassword, 
    name: dev.name, 
    cuit: dev.cuit, 
    address: dev.address, 
    postalCode: dev.postalCode, 
    city: dev.city, 
    state: dev.state, 
    phone: dev.phone, 
    userStatus: dev.userStatus, 
    admin: dev.admin, 
  });

  await Users.create({
    email: admin.email, 
    password: hashedAdminPassword, 
    name: admin.name, 
    cuit: admin.cuit, 
    address: admin.address, 
    postalCode: admin.postalCode, 
    city: admin.city, 
    state: admin.state, 
    phone: admin.phone, 
    userStatus: admin.userStatus, 
    admin: admin.admin, 
  });
  
  return;
};
// <--------

// FUNCION PARA TRANSFORMAR A MAYUS UN STRING ----->
const mayusLetter = (string) => string.toUpperCase();
//<-------

const infoUser = (data) => {

  return {
    id: data.id,
    email: data.email,
    userNumber: data.userNumber,
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


module.exports = { hashPassword, compareHash, getDateFormat, infoUser, createAdmin, mayusLetter };