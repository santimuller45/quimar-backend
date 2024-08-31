const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("productos", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        codigo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: ""
        },
        descripcion: {
            type: DataTypes.STRING,
            defaultValue: "",
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue:0
        },
        total: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        timestamps: true,
    });
};