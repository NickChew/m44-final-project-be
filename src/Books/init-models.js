var DataTypes = require("sequelize").DataTypes;
var _booksModel = require("./booksModel");
var _users = require("./users");
var _users2booksModel = require("./users2booksModel").default;
var _wishlistModel = require("./wishlistModel");
var _user2wishlistModel = require("./user2WishlistModel");

function initModels(sequelize) {
  var booksModel = _booksModel(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users2booksModel = _users2booksModel(sequelize, DataTypes);
  var wishlistModel = _wishlistModel(sequelize, DataTypes);
  var user2wishlistModel = _user2wishlistModel(sequelize, DataTypes);

  return {
    booksModel,
    users,
    users2booksModel,
    wishlistModel,
    user2wishlistModel,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

