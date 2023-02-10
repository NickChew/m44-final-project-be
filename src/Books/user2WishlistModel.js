const {DataTypes} = require('sequelize');
const sequelize = require("../db/connection");
const user2WishlistModel = sequelize.define("user2WishlistModel",{
  user_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  google_ID: {
    type: DataTypes.STRING(12),
    allowNull: false,
    primaryKey: true
  }
}, {
  sequelize,
  tableName: 'user2WishlistModel',
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

  module.exports = user2WishlistModel;

