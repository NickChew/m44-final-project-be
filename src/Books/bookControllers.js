const URL=require("url").URL
const users = require("../user/userModel");
const booksModel = require("./booksModel");
const User2BookModel = require("./users2booksModel");
const user2WishlistModel = require("./user2WishlistModel");
const QueryString = require("qs");

//Add Book - need to change too add books to user books table in database - to be done!
//check book is not in db 1st then add, dont if already there.
exports.addBooks = async (request, response) => {
    try {     
        const checkBookExists = await booksModel.findOne({where:{google_ID:request.body.google_ID}})
        if (checkBookExists===null) {
            const newaddBooks = await booksModel.create({google_ID: request.body.google_ID, ISBN:request.body.ISBN, title:request.body.title, author:request.body.author, thumbnail:request.body.thumbnail, description:request.body.description, category:request.body.category, selflink:request.body.selflink, publishDate:request.body.publishDate}); 
        } else {
            console.log("Book already exists");
        }                               
        const checkBookinLibrary = await User2BookModel.findOne({where:{google_ID:request.body.google_ID, user_ID:request.body.user_ID}})
        if (checkBookinLibrary === null) {
            const newUsers_Books = await User2BookModel.create({user_ID:request.body.user_ID, google_ID:request.body.google_ID});        
        } 
        else {
            console.log("Already in Library")
        }
        console.log("user2book created");
        response.status(200).send({msg: "Completed"});
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
};

//Add Book to wishlist - check wished book is not in db 1st then add, dont if already there.
exports.addWishBooks = async (request, response) => {
    try {     
        const checkBookExists = await booksModel.findOne({where:{google_ID:request.body.google_ID}})
        if (checkBookExists===null) {
            const newaddBooks = await booksModel.create({google_ID: request.body.google_ID, ISBN:request.body.ISBN, title:request.body.title, author:request.body.author, thumbnail:request.body.thumbnail, description:request.body.description, category:request.body.category, selflink:request.body.selflink, publishDate:request.body.publishDate}); 
        } else {
            console.log("Book already exists");
        }                               
        const checkBookinWishlist = await user2WishlistModel.findOne({where:{google_ID:request.body.google_ID, user_ID:request.body.user_ID}})
        if (checkBookinWishlist === null) {
            const newUsers_Books = await user2WishlistModel.create({user_ID:request.body.user_ID, google_ID:request.body.google_ID});        
        } 
        else {
            console.log("Already in WishList")
        }
        console.log("user2book created");
        response.status(200).send({msg: "Completed"});
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
};

//list books in user library 
exports.listBooks = async (request, response) => {
    try {
        console.log(request.user.user_ID)
        const user_ID = request.user.user_ID
        console.log(user_ID);
        let bookDetails = [];
        const books = await User2BookModel.findAll({where:{user_ID: user_ID}});
        for (let index = 0; index < books.length; index++) {
            const element = await booksModel.findOne({where:{google_ID:books[index].dataValues.google_ID}});
            bookDetails.push(element)
        }
        response.status(218).send({books: bookDetails});
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
};

//Wishlist list - following should list all Books in wishlist
exports.listWishBooks = async (request, response) => {
    try {
        const user_ID = request.user.user_ID
        let bookDetails = [];
        const books = await user2WishlistModel.findAll({where:{user_ID: user_ID}});
        for (let index = 0; index < books.length; index++) {
            console.log(books[index].dataValues.google_ID)
            const element = await booksModel.findOne({where:{google_ID:books[index].dataValues.google_ID}});
            bookDetails.push(element)
        }
        response.status(218).send({books: bookDetails});
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
};

//following should Delete selected book from users database/table - to be done!
//check book is in db 1st then delete, cant delete Book Not there.
exports.deleteBooks = async (request, response) => {
    try {
        const deletedBook = await User2BookModel.destroy({where: {user_ID: request.body.user_ID, google_ID : request.body.google_ID}});  
        if (deletedBook > 0) {
            response.status(200).send({msg: "book Deleted"});
        }
        else {
            throw new Error("Did not delete.");
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ error: error.message });
    }
};

//following should delete book from wishlist table/databse - to be done!
//check book is in db 1st then delete, cant delete Book Not there.
exports.deleteWishBooks = async (request, response) => {
    try {
        const deletedWishBook = await user2WishlistModel.destroy({where: {user_ID: request.body.user_ID, google_ID : request.body.google_ID}}); 
        if (deletedWishBook > 0) {
            response.status(200).send({msg: "book Deleted from Wishlist"});
        }
        else {
            throw new Error("Did not delete.");
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ error: error.message });
    }
};

