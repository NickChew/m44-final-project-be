const {DataTypes} = require('sequelize');
const sequelize = require("../db/connection");
const wishlistModel = sequelize.define("wishlistModel", {
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
  tableName: 'wishlistModel',
  timestamps: false
});

module.exports = wishlistModel;

