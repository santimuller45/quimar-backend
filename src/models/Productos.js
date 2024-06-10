const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("productos", {
        codigo: {
            type: DataTypes.FLOAT,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING(),
            defaultValue: '',
        },
        category: {
            type: DataTypes.STRING(),
            defaultValue: ""
        },
        descripcion: {
            type: DataTypes.STRING(),
            defaultValue: "",
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue:0
        },
        total: {
            type: DataTypes.DECIMAL,
            defaultValue: 0
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        updated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },{
        timestamps: false,
    });
};