const {Router} = require("express");

const {addBooks, addWishBooks, listBooks, listWishBooks, deleteBooks, deleteWishBooks} = require("./bookControllers");
const {tokenCheck} = require("../middleware"); //because index.js otherwise path goes here


const bookRouter = Router();

bookRouter.post("/addBook", addBooks);
bookRouter.post("/addWishBook", addWishBooks);
bookRouter.get("/listBooks", tokenCheck, listBooks);
bookRouter.get("/listWishBooks", tokenCheck, listWishBooks);
bookRouter.delete("/deleteBook", deleteBooks);
bookRouter.delete("/deleteWishBook", deleteWishBooks)

module.exports = bookRouter;

