import Sequelize from 'sequelize';
export default function(sequelize, DataTypes) {
  return sequelize.define('users2booksModel', {
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
    tableName: 'users2booksModel',
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

