const {Router} = require("express");
const {createUser, listUsers, login, updatedEmail, deleteUser, token} = require("./userControllers");
const {hashPass,comparePass, tokenCheck} = require("../middleware"); //because index.js otherwise path goes here

const userRouter = Router();

userRouter.get("/listUser", tokenCheck, listUsers);
userRouter.post("/addUser", hashPass, createUser);
userRouter.post("/login", comparePass, login);  //gets token etc
userRouter.put("/update", comparePass, updatedEmail);
userRouter.delete("/deleteUser", comparePass, deleteUser);
userRouter.get("/authCheck", tokenCheck, login);

module.exports = userRouter;
