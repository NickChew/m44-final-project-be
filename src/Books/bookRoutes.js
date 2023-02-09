const {Router} = require("express");

const {addBooks, addWishBooks, listBooks, deleteBooks, deleteWishBooks} = require("./bookControllers");

const bookRouter = Router();

bookRouter.post("/addBook", addBooks);
bookRouter.post("/addWishBook", addWishBooks);
bookRouter.get("/listBooks", listBooks);
bookRouter.delete("/deleteBook", deleteBooks);
//bookRouter.post("/deleteBook", deleteBooks);
bookRouter.delete("/deleteWishBook", deleteWishBooks)
//bookRouter.post("/deleteWishBook", deleteWishBooks); // ??? post is to create or add


module.exports = bookRouter;

