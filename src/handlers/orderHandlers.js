const { 
    getAllOrdersController,
    getOrderByIdController,
    updateOrderByIdController,
    createOrderController
} = require('../controllers/orderController.js');

const handlerGetAllOrders = async ( req , res ) => {
    try {
        const allOrders = await getAllOrdersController();
        if (allOrders.length < 1) throw Error('Orden de compra no encontrada');
        res.status(200).json(allOrders);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const handlerGetOrderById = async ( req, res ) => {
    const { orderID } = req.params;
    try {
        const orderFound = await getOrderByIdController(orderID);
        if (orderFound === null) throw Error('Orden de compra no encontrada');
        res.status(200).json(orderFound);
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
    handlerGetOrderById,
    handlerUpdateOrder,
    handlerCreateOrder
};