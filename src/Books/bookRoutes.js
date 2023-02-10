const {Router} = require("express");

const {addBooks, addWishBooks, listBooks, listWishBooks, deleteBooks, deleteWishBooks} = require("./bookControllers");

const bookRouter = Router();

bookRouter.post("/addBook", addBooks);
bookRouter.post("/addWishBook", addWishBooks);
bookRouter.get("/listBooks", listBooks);
bookRouter.get("/listWishBooks", listWishBooks);
bookRouter.delete("/deleteBook", deleteBooks);
bookRouter.delete("/deleteWishBook", deleteWishBooks)

module.exports = bookRouter;

