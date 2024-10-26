require('dotenv').config();
const { DEV_QUIMAR, DEV_QUIMAR_PASSWORD, ADM_QUIMAR, ADM_QUIMAR_PASSWORD } = process.env;

const dev = {
    email: DEV_QUIMAR,
    password: DEV_QUIMAR_PASSWORD,
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

const admin = {
    email: ADM_QUIMAR,
    password: ADM_QUIMAR_PASSWORD,
    name: 'Pegurri Marcos Ariel',
    cuit: "20-23130541-7",
    address: "Argentinas del Sur 1182",
    city: "Bahia Blanca",
    state: "Buenos Aires",
    postalCode: "8000",
    phone: "291-4883929",
    userStatus: true,
    admin: true,
};

module.exports = { dev, admin };