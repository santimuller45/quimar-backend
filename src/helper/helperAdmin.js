require('dotenv').config();
const { USER_ADM_QUIMAR, USER_ADM_QUIMAR_PASSWORD } = process.env;

const userAdmin = {
    email: USER_ADM_QUIMAR,
    password: USER_ADM_QUIMAR_PASSWORD,
    firstname: 'Marco',
    lastname: 'Pegurri',
    cuit: "99-999-999",
    userStatus: true,
    admin: true,
};

module.exports = { userAdmin };