const {DataTypes} = require('sequelize');
const sequelize = require("../db/connection");
const booksModel = sequelize.define('booksModel', {
  google_ID: {
    type: DataTypes.STRING(12),
    allowNull: false,
    primaryKey: true
  },
  ISBN: {
    type: DataTypes.DECIMAL(13,0),
    allowNull: true
  },
  author: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  thumbnail: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.STRING(2047),
    allowNull: true
  },
  category: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  selflink: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  publishDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'booksModel',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "google_ID" },
      ]
    },
    {
      name: "google_ID",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "google_ID" },
      ]
    },
  ]
});

module.exports = booksModel;
