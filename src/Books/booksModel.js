const {DataTypes} = require('sequelize');
const sequelize = require("../db/connection");
const booksModel = sequelize.define('booksModel', {
    google_id: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    ISBN_10: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ISBN_13: {
      type: DataTypes.DECIMAL(13,0),
      allowNull: true
    },
    AUTHOR: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'booksModel',
    timestamps: false
  });

module.exports = booksModel;
