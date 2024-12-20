const { 
    getAllUsersDBController,  
    getUserController, 
    createUserController, 
    loginUserController,
    updateUserPasswordController, 
    updateUserController 
} = require('../controllers/userController.js');

const getUsersHandler = async (req, res) => {
    const { name, userNumber } = req.query;
    try {
        let userDB;

        if (name || userNumber) {
            userDB = await getUserController(name || null, userNumber || null);
        } else {
            userDB = await getAllUsersDBController();
        }

        if (!userDB) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json(userDB);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const createUserHandler = async (req, res) => {
    try {
        const { email, name, password, cuit, address, postalCode, city, state, phone, userStatus, admin } = req.body;
        const newUser = await createUserController( email, name, password, cuit, address, postalCode, city, state, phone, userStatus, admin )
        res.status(201).send(newUser);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const loginUserHandler = async (req, res) => {
    const { email , password } = req.body;
    try {
        const user = await loginUserController( email , password );
        res.status(200).send(user);
    } catch (error) {
        res.status(error.status || 500 ).json({ message: error.message });
    }
};

const updateUserPasswordHandler = async (req,res) => {
    const { email, cuit, password, newPassword } = req.body;
    try {
        const userUpdate = await updateUserPasswordController(email, cuit, password, newPassword);
        res.status(200).send(userUpdate);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const updateUserHandler = async (req,res) => {
    const { id, email, name, cuit, address, postalCode, city, state, phone, userStatus, admin } = req.body;
    try {
        const userUpdate = await updateUserController( id, email, name, cuit, address, postalCode, city, state, phone, userStatus, admin );
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

module.exports = {
    getUsersHandler,
    createUserHandler,
    loginUserHandler,
    updateUserPasswordHandler,
    updateUserHandler
};