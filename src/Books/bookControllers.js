
const users = require("../user/userModel");
const booksModel = require("./booksModel");
const User2BookModel = require("./users2booksModel");
const wishlistModel = require("./wishlistModel");
const user2WishlistModel = require("./user2WishlistModel");

//Add Book - need to change too add books to user books table in database - to be done!
//check book is not in db 1st then add, dont if already there.
exports.addBooks = async (request, response) => {
    console.log(request.body);
    try {     
        const checkBookExists = await booksModel.findOne({where:{google_id:request.body.google_id}})
        console.log(checkBookExists);
        if (checkBookExists===null) {
            const newaddBooks = await booksModel.create({google_id: request.body.google_id, TITLE:request.body.TITLE, AUTHOR:request.body.AUTHOR});            
            console.log(newaddBooks);          
        }
        const checkBookinLibrary = await User2BookModel.findOne({where:{google_id:request.body.google_id, user_ID:request.body.user_ID}})
        if (checkBookinLibrary === null) {
            const newUsers_Books = await User2BookModel.create({user_ID:request.body.user_ID, google_ID:request.body.google_id});
            console.log("Already in Library")
        } 
        console.log("user2book created");
        // console.log(newUsers_Books);
        response.status(200).send("Completed");
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
};

//Add Book to wishlist - need to change too add books to wishlist table in database - to be done!
//check wished book is not in db 1st then add, dont if already there.
exports.addWishBooks = async (request, response) => {
    console.log(request);
    try {
        const checkWishbookexists = await user2WishlistModel.find({where:{google_id:request.google_id}})
        const newaddwishBooks = await user2WishlistModel.create(request.body.google_id, request.body.title, request.body.authors, request.body.imageURL);
        // const newaddWishBooks = await user2WishlistModel.create(newBooks);
        response.status(200).send({ wishlistModel: newWishBooks });
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
};

//list books in user library   not working
exports.listBooks = async (request, response) => {
    try {
        let bookDetails = [];
        const books = await User2BookModel.findall({where:{user_ID: request.user.id}});
        for (let index = 0; index < books.length; index++) {
            const element = books[index];
            bookDetails.push(element)
        }
        response.status(218).send(bookDetails);
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
};

//Wishlist list - following should list all Books in wishlist   DONE - checked no
exports.listWishBooks = async (request, response) => {
    try {
        let wishBookDetails = [];
        const wishBooks = await user2WishlistModel.findall({where:{user_id: request.user.id}});
        for (let index = 0; index < wishBooks.length; index++) {
            const element = wishBooks[index];
            wishBookDetails.push(element)
        }
        response.status(218).send(wishBookDetails);
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
};

//following should Delete selected book from users database/table - to be done!
//check book is in db 1st then delete, cant delete Book Not there.
exports.deleteBooks = async (request, response) => {
    try {
        const deletedBooks = await User2BookModel.deleteOne({user_ID: request.body.TITLE, user_ID : request.body.google_ID});  
        if (deletedBooks.deletedCount > 0) {
            response.status(200).send({ booksModel: deletedBooks });
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
        const deletedWishBooks = await wishlistModel.deleteOne({user_ID: request.body.TITLE, user_ID : request.body.google_ID}); 
        if (deletedWishBooks.deletedCount > 0) {
            response.status(200).send({ wishlistModel: deletedWishBooks });
        }
        else {
            throw new Error("Did not delete.");
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ error: error.message });
    }
};

