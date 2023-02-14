const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    user_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName:{
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "firstName"
    },
    surname:{
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "surname"
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "userName"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email",
      match: /^\S+@\S+$/
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "userName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userName" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  })
};