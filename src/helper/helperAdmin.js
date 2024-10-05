require('dotenv').config();
const { USER_ADMIN, USER_ADMIN_PASSWORD, USER_ADM_QUIMAR, USER_ADM_QUIMAR_PASSWORD } = process.env;

const admin = {
    email: USER_ADMIN,
    password: USER_ADMIN_PASSWORD,
    name: 'Santiago Muller',
    cuit: "20-39157263-2",
    address: "Bahia Blanca",
    city: "Bahia Blanca",
    state: "Buenos Aires",
    postalCode: "8000",
    phone: "291-4649372",
    userStatus: true,
    admin: true,
}

const quimarAdmin = {
    email: USER_ADM_QUIMAR,
    password: USER_ADM_QUIMAR_PASSWORD,
    name: 'Pegurri Marco Ariel',
    cuit: "20-23130541-7",
    address: "Argentinas del Sur 1182",
    city: "Bahia Blanca",
    state: "Buenos Aires",
    postalCode: "8000",
    phone: "291-4883929",
    userStatus: true,
    admin: true,
};

module.exports = { admin, quimarAdmin };