const { 
    getAllOrdersController,
    getOrderByIdController,
    updateOrderByIdController,
    getOrderByUserController,
    createOrderController
} = require('../controllers/orderController.js');

const handlerGetAllOrders = async (req, res) => {
    const { userNumber } = req.query;
    try {
        let result;

        if (userNumber) {
            result = await getOrderByUserController(userNumber);
        } else {
            result = await getAllOrdersController();
        }

        // Si el resultado es un array vacío, devuelves un 200 con el array vacío
        if (result.length === 0) {
            return res.status(200).json([]); // O puedes devolver un mensaje específico
        }

        res.status(200).json(result);
    } catch (error) {
        // Maneja el error correctamente
        res.status(500).json({ message: error.message });
    }
};

const handlerGetOrderBy = async ( req, res ) => {
    const { orderID } = req.params;
    try {
        const findOrder = await getOrderByIdController(orderID);
        if (!findOrder) throw Error('Orden de compra no encontrada');
        res.status(200).json(findOrder);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const handlerUpdateOrder = async (req, res) => {
    const { id, status } = req.body;
    try {
        const orderFound = await updateOrderByIdController(id, status);
        if (orderFound === null) throw Error("Orden de compra no encontrada");
        res.status(200).json(orderFound);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const handlerCreateOrder = async (req, res) => {
    const { listaPedido, amount, totalAmount, comentary, orderStatus , userEmail } = req.body;
    try {
        const order = await createOrderController(listaPedido, amount, totalAmount, comentary, orderStatus, userEmail );
        if (order === null) throw Error("No se pudo crear la orden de compra");
        if (userEmail === null) throw Error('Porfavor ingrese a su cuenta antes de realizar el pedido');
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

module.exports = {
    handlerGetAllOrders,
    handlerGetOrderBy,
    handlerUpdateOrder,
    handlerCreateOrder
};