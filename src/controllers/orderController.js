const { Orders, Users } = require('../db.js');

// Obtener todas las órdenes
const getAllOrdersController = async () => {
    try {
        return await Orders.findAll({ 
            include: { model: Users, attributes: ["userNumber","email", "name"] } 
        });
    } catch (error) {
        throw new Error("Error al obtener las órdenes: " + error.message);
    }
};

// Obtener orden por ID
const getOrderByIdController = async (orderID) => {
    try {
        return await Orders.findByPk(orderID, { 
            include: { model: Users, attributes: ["userNumber","email", "name"] } 
        });
    } catch (error) {
        throw new Error("Error al obtener la orden: " + error.message);
    }
};

const getOrderByUserController = async (userNumber) => {
    try {
        const findUser = await Users.findOne({ where: { userNumber } });
        
        if (!findUser) {
            throw new Error("Usuario no encontrado");
        }

        const orders = await Orders.findAll({ 
            where: { userId: findUser.id },
            include: { model: Users, attributes: ["userNumber","email", "name"] 
            }}
        );

        if (orders.length === 0) {
            throw new Error("No se encontraron órdenes para este usuario");
        }

        return orders;

    } catch (error) {
        throw new Error("Error al obtener las órdenes: " + error.message);
    }
};

// Actualizar orden por ID
const updateOrderByIdController = async (id, status) => {
    try {
        const orderToModify = await Orders.findByPk(id, { 
            include: { model: Users, attributes: ["userNumber","email", "name"] } 
        });

        if (!orderToModify) throw new Error("No se pudo encontrar la orden de compra");

        orderToModify.orderStatus = status;
        await orderToModify.save();
        return orderToModify;
    } catch (error) {
        throw new Error("Error al actualizar la orden: " + error.message);
    }
};

// Crear nueva orden
const createOrderController = async (listaPedido, amount, totalAmount, comentary, orderStatus, userEmail) => {
    try {

        const user = await Users.findOne({ where: { email: userEmail } });
        if (!user) throw new Error("Usuario no encontrado");

        // Crear la nueva orden y asociarla al usuario
        const newOrder = await Orders.create({ 
            listaPedido, 
            amount, 
            totalAmount, 
            comentary, 
            orderStatus, 
            userId: user.id // Aquí asignas el ID del usuario
        });

        return newOrder;
    } catch (error) {
        throw new Error("Error al crear la orden: " + error.message);
    }
};

module.exports = {
    getAllOrdersController,
    getOrderByIdController,
    getOrderByUserController,
    updateOrderByIdController,
    createOrderController
}