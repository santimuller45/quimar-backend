const { Orders, Users } = require('../db.js');

const getAllOrdersController = async () => {

    const resultAllOrders = await Orders.findAll({ include:{ model: Users, attributes:["email","firstname","lastname"] }});
    const orderPending = [];
    const orderCompleted = [];
    const orderCancel = [];

    for (let i= 0 ; i < resultAllOrders.length; i++) {
        if (resultAllOrders[i].orderStatus === 'PENDIENTE') {
            orderPending.push(resultAllOrders[i]);
        } else if (resultAllOrders[i].orderStatus === 'COMPLETADO') {
            orderCompleted.push(resultAllOrders[i]);
        } else if (resultAllOrders[i].orderStatus === 'CANCELADO') {
            orderCancel.push(resultAllOrders[i]);
        }
    };
    return { orderPending, orderCompleted, orderCancel };
};

const getOrderByIdController = async ( id ) => {

    return await Orders.findByPk( id, 
        { include: { 
            model: Users,
            attributes:["email","firstname","lastname"],
        }}
    );
};

const updateOrderByIdController = async ( id , status) => {

    const orderToModify = await Orders.findByPk(id,
        { include: {
            model: Users,
            attributes:["email","firstname","lastname"],
        }}
    );

    if (orderToModify === null) throw Error("No se pudo encontrar la orden de compra");

    orderToModify.orderStatus = status;
    await orderToModify.save();
    return orderToModify;
};

const createOrderController = async ( listaPedido, amount, totalAmount, comentary, orderStatus, userEmail ) => {

    const newOrder = await Orders.create({ listaPedido, amount, totalAmount, comentary, orderStatus });
    const findUser = await Users.findAll({ where: { email : userEmail}});

    await newOrder.addUsers(findUser);
    return newOrder;
};

module.exports = {
    getAllOrdersController,
    getOrderByIdController,
    updateOrderByIdController,
    createOrderController
}