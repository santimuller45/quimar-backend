const { Users , Pedido } = require("../db.js");
const { infoUser } = require('./extraController.js');

const getAllUsersDBController = async () => {
    const allUsers = await Users.findAll();
    if (!allUsers) throw Error ("Did not found users in DB");
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
  if (!findUser) throw Error("User did not found");
  else return findUser;
};

const createUserController = async ( email, password, firstname, lastname, cuit, address, postalCode, city, state, phone, userStatus, admin ) => {
  const newUser = await Users.findByPk(email);
  if (!newUser) {
      await Users.create({ email, password, firstname,  lastname, cuit, address, postalCode, city, state, phone, userStatus, admin })
      return "User Created succesfully";
  } else throw Error ("Email already exist");
};

const loginUserController = async ( email , password ) => {
  if (!email || !password) throw Error("Please enter email and password");
  const user = await Users.findByPk(email);
  if (!user) throw Error ("Incorrect email");
  else if (user.password !== password) throw Error ("Incorrect password");
  else if (!user.userStatus) throw Error("User is currently disabled");
  else return infoUser(user);
};

module.exports = {
    getAllUsersDBController,
    getUserController,
    createUserController,
    loginUserController
}