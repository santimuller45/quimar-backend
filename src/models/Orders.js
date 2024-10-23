const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
    "orders", 
    {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        listaPedido: {
          type: DataTypes.JSONB,
          allowNull: false,
          defaultValue: []
        },
        amount: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.00,
        },
        totalAmount: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.00,
        },
        comentary: {
          type: DataTypes.STRING,
          defaultValue: null
        },
        orderStatus: {
          type: DataTypes.STRING,
          defaultValue: 'PEDIDO-WEB',
        },
        orderDate: {
          type: DataTypes.JSONB,
          defaultValue: [],
        },
        userId: {
          type: DataTypes.UUID,
          references: {
            model: 'users',
            key: 'id',
          },
        },
  },{
    timestamps: false,
  });
};