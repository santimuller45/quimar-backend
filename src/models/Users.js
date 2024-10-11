const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userNumber: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true, // Aumenta automáticamente
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true, // Validar que el campo sea un email
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cuit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      userStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      admin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
};