const { Users, Orders } = require("../db.js");
const { infoUser } = require('./extraController.js');
const { Op, where } = require('sequelize');

const getAllUsersDBController = async () => {
    const allUsers = await Users.findAll();
    if (!allUsers.length) return [];
    return allUsers;
};

const getUserController = async (name, userNumber) => {
    let findUser;

    if (name) {
        findUser = await Users.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%` // Usar Op.like para buscar coincidencias parciales
                }
            },
            include: {
                model: Orders
            }
        });
    } else if (userNumber) {
        findUser = await Users.findAll({
            where: { userNumber },
            include: {
                model: Orders
            }
        });
    }

    if (!findUser || (Array.isArray(findUser) && findUser.length === 0)) {
        throw { status: 400, message: "Usuario no encontrado" };
    } else {
        return findUser;
    }
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

const updateUserController = async ( id, email, name, cuit, address, postalCode, city, state, phone, userStatus, admin ) => {

    const findUserDB = await Users.findByPk(id);

    if ( email && findUserDB.email !== email ) {
        const isEmailAvailable = Users.findOne({ where: { email } });
        if (isEmailAvailable.length > 0 || isEmailAvailable.id ) throw { status: 404, message: 'Este email ya existe en el sistema' };
    } else {
        email = findUserDB.email;
    }
    
    await findUserDB.update({
        email: email || findUserDB.email,
        name: name || findUserDB.name,
        cuit: cuit || findUserDB.cuit,
        address: address || findUserDB.address,
        postalCode: postalCode || findUserDB.postalCode,
        city: city || findUserDB.city,
        state: state || findUserDB.state,
        phone: phone || findUserDB.phone,
        userStatus: userStatus !== undefined ? userStatus : userDB.userStatus,
        admin: admin !== undefined ? admin : userDB.admin,
    });
    await findUserDB.save();
    return infoUser(findUserDB);
};

module.exports = {
    getAllUsersDBController,
    getUserController,
    createUserController,
    loginUserController,
    updateUserPasswordController,
    updateUserController
};