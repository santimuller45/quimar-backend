const { 
    getAllUsersDBController,  
    getUserController, 
    createUserController, 
    loginUserController, 
    updateUserController 
} = require('../controllers/userController.js');

const getUsersHandler = async (req, res) => {
    try {
        const { email } = req.query;
        const userDB = email ? await getUserController(email) : await getAllUsersDBController();
        res.status(200).json(userDB);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const createUserHandler = async (req, res) => {
    try {
        const { email, password, name, cuit, address, postalCode, city, state, phone, userStatus, admin } = req.body;
        const newUser = await createUserController( email, password, name, cuit, address, postalCode, city, state, phone, userStatus, admin )
        res.status(200).send(newUser);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const loginUserHandler = async (req, res) => {
    try {
        const { email , password } = req.body;
        const user = await loginUserController( email , password );
        if (user) res.status(200).send(user);
    } catch (error) {
        res.status(400).json({ error : error.message});
    }
};

const updateUserHandler = async (req,res) => {
    const { email, password, name, cuit, address, postalCode, city, state, phone, userStatus, admin } = req.body;
    try {
        const userUpdate = await updateUserController( email, password, name, cuit, address, postalCode, city, state, phone, userStatus, admin );
        res.status(201).json(userUpdate);
    } catch (error) {
        res.status(400).json({ error : error.message});
    }
};

module.exports = {
    getUsersHandler,
    createUserHandler,
    loginUserHandler,
    updateUserHandler
};