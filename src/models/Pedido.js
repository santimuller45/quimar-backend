const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("pedido", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    listaPedido: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    amount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    comentary: {
      type: DataTypes.STRING,
      defaultValue:'empty'
    },
    orderStatus: {
      type: DataTypes.STRING,
      defaultValue: 'PENDIENTE',
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },{
    // timestamps: false,
  });
};