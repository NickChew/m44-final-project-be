const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wishlistModel', {
    user_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    google_book_ID: {
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
          { name: "google_book_ID" },
        ]
      },
    ]
  });
};
