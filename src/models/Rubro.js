const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("rubro", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        subRubro: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        updated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },{
      timestamps: false,
    });
  };