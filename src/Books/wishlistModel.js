const {DataTypes} = require('sequelize');
const sequelize = require("../db/connection");
const wishlistModel = sequelize.define("wishlistModel", {
    user_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    google_ID: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'wishlistModel',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_ID" },
          { name: "google_ID" },
        ]
      },
    ]
  });

module.exports = wishlistModel;

