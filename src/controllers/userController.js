const { Users, Orders } = require("../db.js");
const { infoUser } = require('./extraController.js');

const getAllUsersDBController = async () => {
    const allUsers = await Users.findAll();
    if (!allUsers.length) return [];
    return allUsers;
};

const getUserController = async (email) => {
    const findUser = await Users.findOne({
        where: { email },
        include: {
            model: Orders,
            attributes: ['id']
        }
    });
    if (!findUser) throw { status: 400, message: "Usuario no encontrado" };
    else return findUser;
};

const createUserController = async (email, name, password, cuit, address, postalCode, city, state, phone, userStatus, admin) => {

    // Validamos los inputs de las propiedades del usuario
    if (!email || !name || !cuit) {
        throw { status: 400, message: "Los campos email, nombre y CUIT/CUIL son requeridos" };
    }

    // Verificar si el email ya está registrado
    const existingUser = await Users.findOne({ where: { email } });
    if (existingUser) {
        throw { status: 400, message: "El email ya se encuentra registrado" };
    }

    // Si no se proporciona una contraseña se le asigna el CUIT como contraseña
    if (!password) password = cuit;

    // Creación del nuevo usuario
    await Users.create({ email, password, name, cuit, address, postalCode, city, state, phone, userStatus, admin });
    return "Usuario creado correctamente, espere a que su cuenta sea activada";
};

const loginUserController = async (email, password) => {
    if (!email || !password) throw { status: 400, message: "Por favor ingrese email y contraseña" };
    const user = await Users.findOne({ where: { email } });
    if (!user) throw { status: 401, message: "Email incorrecto" };
    else if (user.password !== password) throw { status: 401, message: "Contraseña incorrecta" };
    else if (!user.userStatus) throw { status: 403, message: "La cuenta todavía no está activada" };
    else return infoUser(user);
};

const updateUserPasswordController = async (email, cuit) => {
    const userDB = await Users.findOne({ where: { email } });
    if (!userDB) throw { status: 404, message: 'Email incorrecto' };
    if (userDB.cuit !== cuit) throw { status: 404, message: 'CUIT/CUIL incorrecto' };
    const password = cuit;
    await userDB.update({ password });
    await userDB.save();
    return infoUser(userDB);
};

const updateUserController = async (email, password, name, cuit, address, postalCode, city, state, phone, userStatus, admin) => {
    const userDB = await Users.findOne({ where: { email } });
    if (!userDB) throw { status: 404, message: 'Email incorrecto' };
    
    await userDB.update({
        password: password || userDB.password,
        name: name || userDB.name,
        cuit: cuit || userDB.cuit,
        address: address || userDB.address,
        postalCode: postalCode || userDB.postalCode,
        city: city || userDB.city,
        state: state || userDB.state,
        phone: phone || userDB.phone,
        userStatus: userStatus !== undefined ? userStatus : userDB.userStatus,
        admin: admin !== undefined ? admin : userDB.admin
    });
    await userDB.save();
    return infoUser(userDB);
};

module.exports = {
    getAllUsersDBController,
    getUserController,
    createUserController,
    loginUserController,
    updateUserPasswordController,
    updateUserController
};