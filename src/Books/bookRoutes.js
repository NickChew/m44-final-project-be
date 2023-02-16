const {Router} = require("express");

const {addBooks, addWishBooks, listBooks, listWishBooks, deleteBooks, deleteWishBooks} = require("./bookControllers");
const {tokenCheck} = require("../middleware"); //because index.js otherwise path goes here


const bookRouter = Router();

bookRouter.post("/addBook", tokenCheck, addBooks);
bookRouter.post("/addWishBook", tokenCheck, addWishBooks);
bookRouter.get("/listBooks", tokenCheck, listBooks);
bookRouter.get("/listWishBooks", tokenCheck, listWishBooks);
bookRouter.delete("/deleteBook", tokenCheck, deleteBooks);
bookRouter.delete("/deleteWishBook", tokenCheck, deleteWishBooks);

module.exports = bookRouter;

