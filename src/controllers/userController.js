const { Users , Pedido } = require("../db.js");
const { infoUser } = require('./extraController.js');

const getAllUsersDBController = async () => {
    const allUsers = await Users.findAll();
    if (!allUsers) throw Error ("Usuario no encontrado");
    else return allUsers;
};

const getUserController = async ( email ) => {
  const findUser = await Users.findByPk(email, {
    include:
      {
        model: Pedido,
        attributes: ['id']
      }
  });
  if (!findUser) throw Error("Usuario no encontrado");
  else return findUser;
};

const createUserController = async ( email, password, firstname, lastname, cuit, address, postalCode, city, state, phone, userStatus, admin ) => {
  const newUser = await Users.findByPk(email);
  if (!newUser) {
      await Users.create({ email, password, firstname,  lastname, cuit, address, postalCode, city, state, phone, userStatus, admin })
      return "Usuario creado correctamente, espere a que su cuenta sea activada";
  } else throw Error ("Email already exist");
};

const loginUserController = async ( email , password ) => {
  if (!email || !password) throw Error("Porfavor ingrese email y contraseña");
  const user = await Users.findByPk(email);
  if (!user) throw Error ("Email incorrecto");
  else if (user.password !== password) throw Error ("Contraseña incorrecta");
  else if (!user.userStatus) throw Error("La cuenta todavia no esta activada");
  else return infoUser(user);
};

module.exports = {
    getAllUsersDBController,
    getUserController,
    createUserController,
    loginUserController
}