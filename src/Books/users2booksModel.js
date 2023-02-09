const {DataTypes} = require('sequelize');
const sequelize = require("../db/connection");
const User2BookModel = sequelize.define("User2BookModel", {
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
    tableName: 'users2booksModel',
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

module.exports = User2BookModel;

