require('dotenv').config();
const { USER_ADM_QUIMAR, USER_ADM_QUIMAR_PASSWORD } = process.env;

const userAdmin = {
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

module.exports = { userAdmin };