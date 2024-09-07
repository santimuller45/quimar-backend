const { Users , Orders } = require("../db.js");
const { infoUser } = require('./extraController.js');

const getAllUsersDBController = async () => {
    const allUsers = await Users.findAll();
    if (!allUsers.length) return [];
    return allUsers;
};

const getUserController = async ( email ) => {
  const findUser = await Users.findByPk(email, {
    include:
      {
        model: Orders,
        attributes: ['id']
      }
  });
  if (!findUser) throw {status: 400, message: "Usuario no encontrado"};
  else return findUser;
};

const createUserController = async ( email, password, name, cuit, address, postalCode, city, state, phone, userStatus, admin ) => {
  const newUser = await Users.findByPk(email);
  if (newUser) {
    throw { status: 400, message: "El email ya se encuentra registrado" };
  }
  if (!password) {
    throw { status: 400, message: "La contraseña es requerida" };
  }
  await Users.create({ email, password, name, cuit, address, postalCode, city, state, phone, userStatus, admin })
  return "Usuario creado correctamente, espere a que su cuenta sea activada";
};

const loginUserController = async ( email , password ) => {
  if (!email || !password) throw { status: 400, message: "Por favor ingrese email y contraseña"};
  const user = await Users.findByPk(email);
  if (!user) throw { status: 401, message: "Email incorrecto" };
  else if (user.password !== password) throw { status: 401, message: "Contraseña incorrecta" };
  else if (!user.userStatus) throw { status: 403, message: "La cuenta todavía no está activada" };
  else return infoUser(user);
};

const updateUserController = async ( email, password, name, cuit, address, postalCode, city, state, phone, userStatus, admin ) => {
  const userDB = await Users.findByPk( email );
  if (!userDB) throw { status: 404, message: 'Email incorrecto' };
  await userDB.update({
    password,
    name,
    cuit,
    address,
    postalCode,
    city,
    state,
    phone,
    userStatus,
    admin
  });
  await userDB.save();
  return infoUser(userDB);
};

module.exports = {
    getAllUsersDBController,
    getUserController,
    createUserController,
    loginUserController,
    updateUserController
};