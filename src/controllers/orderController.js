const { Orders, Users } = require('../db.js');
const { getDateFormat, sendOrderEmail } = require('../controllers/extraController.js');

// Obtener todas las órdenes
const getAllOrdersController = async () => {
    try {
        const orders = await Orders.findAll({ 
            include: { 
                model: Users, 
                attributes: ["userNumber", "email", "name"] 
            },
            order: [
                ['id', 'DESC']  // Ordenar por 'id' de manera descendente
            ]
        });

        // Manejar el caso en que no hay órdenes
        if (!orders || orders.length === 0) {
            return [];
        }

        return orders;
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

        const getDateNow = getDateFormat();

        // Crear la nueva orden y asociarla al usuario
        const newOrder = await Orders.create({ 
            listaPedido, 
            amount, 
            totalAmount, 
            comentary, 
            orderStatus, 
            userId: user.id, // Aquí asignas el ID del usuario
            orderDate: getDateNow,
        });

        // Llamar a la función para enviar el correo
        await sendOrderEmail(userEmail, newOrder);

        return newOrder;
    } catch (error) {
        throw new Error("Error al crear la orden: " + error.message);
    }
};

const filterOrderByDate = async (day, month, year) => {
    try {
        const getOrder = await Orders.findAll({
            where: {
                orderDate: {
                    day,
                    month,
                    year,
                }
            },
            include: { model: Users, attributes: ["userNumber","email", "name"]},
        });
        return getOrder;
    } catch (error) {
        throw new Error("Error al buscar la orden: " + error.message);
    }
};

module.exports = {
    getAllOrdersController,
    getOrderByIdController,
    getOrderByUserController,
    updateOrderByIdController,
    createOrderController,
    filterOrderByDate,
}