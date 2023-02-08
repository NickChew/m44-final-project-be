const {Router} = require("express");

const {addBook, listBooks, deleteBook, updateDetails} = require("./bookControllers");

const bookRouter = Router();

bookRouter.post("/addBook", addBook);
bookRouter.get("/listBooks", listBooks);
bookRouter.put("/updateDetails", updateDetails);
bookRouter.delete("/deleteBook", deleteBook);

module.exports = bookRouter;

