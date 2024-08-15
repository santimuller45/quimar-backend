require('dotenv').config();
const { USER_ADM_QUIMAR, USER_ADM_QUIMAR_PASSWORD } = process.env;

const userAdmin = {
    email: USER_ADM_QUIMAR,
    password: USER_ADM_QUIMAR_PASSWORD,
    firstname: 'Marco',
    lastname: 'Pegurri',
    adminType: true,
};

module.exports = { userAdmin };