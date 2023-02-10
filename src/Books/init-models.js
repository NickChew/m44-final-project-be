var DataTypes = require("sequelize").DataTypes;
var _booksModel = require("./booksModel");
var _user2WishlistModel = require("./user2WishlistModel");
var _users = require("./users");
var _users2booksModel = require("./users2booksModel");

function initModels(sequelize) {
  var booksModel = _booksModel(sequelize, DataTypes);
  var user2WishlistModel = _user2WishlistModel(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users2booksModel = _users2booksModel(sequelize, DataTypes);



  return {
    booksModel,
    user2WishlistModel,
    users,
    users2booksModel,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
