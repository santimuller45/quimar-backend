const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("productos", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        codigo: {
            type: DataTypes.FLOAT,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
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
        updated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },{
        timestamps: false,
    });
};