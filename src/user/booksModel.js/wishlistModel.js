const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wishlistModel', {
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
};
