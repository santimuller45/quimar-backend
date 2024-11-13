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

// FUNCIÓN PARA UTILIZAR EN EL FRONT PARA FILTRAR LAS ORDERS POR DIA, MES Y AÑO
const getDatesForOrders = () => {
  // Días del 1 al 31 con formato '01', '02', ..., '31'
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
  
  // Meses del 1 al 12 con formato '01', '02', ..., '12'
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));

  // Años predefinidos
  const years = [2024, 2025, 2026, 2027, 2028];

  return { days, months, years };
};

// <-----------------------------

// RESEND ---------------------->
require('dotenv').config();
const { RESEND_EMAIL_FROM, RESEND_EMAIL_TO, RESEND_API_KEY } = process.env;
const { Resend } = require('resend');
const resend = new Resend(RESEND_API_KEY);

const sendOrderEmail = async (userEmail, orderDetails) => {
  const emailContent = `
      <h1>Detalles del Pedido</h1>
      <p><strong>Lista de Productos:</strong></p>
      <ul>
          ${orderDetails.listaPedido.map(item => `<li>Codigo:${item.codigo} Detalle:${item.name} Cantidades:${item.quantity} Precio:${item.price} SubTotal:${item.total}</li>`).join('')}
      </ul>
      <p><strong>Total a Pagar:</strong> $${orderDetails.totalAmount}</p>
      <p><strong>Comentario:</strong> ${orderDetails.comentary}</p>
  `;

  try {
      await resend.emails.send({
          from: RESEND_EMAIL_FROM,
          to: RESEND_EMAIL_TO,
          subject: `PEDIDO-WEB de: ${userEmail} ORDEN N°${orderDetails.id}`,
          html: emailContent,
      });
      console.log('Correo enviado exitosamente');
  } catch (error) {
      console.error('Error al enviar el correo:', error);
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


module.exports = { hashPassword, compareHash, getDateFormat, getDatesForOrders, sendOrderEmail, createAdmin, mayusLetter };