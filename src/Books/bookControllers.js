const users = require("./users");
const booksModel = require("./booksModel");
const users2booksModel = require("./users2booksModel");
const wishlistModel = require("./wishlistModel");
const user2WishlistModel = require("./user2WishlistModel");

//Add Book - need to change too add books to user books table in database - to be done!
exports.addBooks = async (request, response) => {
    console.log(request);
    try {
        const newBooks = await booksModel.create(request.body);
        response.status(200).send({ booksModel: newBooks });
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
}

//Add Book to wishlist - need to change too add books to wishlist table in database - to be done!
exports.addWishBooks = async (request, response) => {
    console.log(request);
    try {
        const newWishBooks = await wishlistModel.create(request.body);
        response.status(200).send({ wishlistModel: newWishBooks });
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
}

//list books in user library - change following to list users books in database 
exports.listBooks = async (request, response) => {
    try {
        let bookDetails = [];
        const books = await users2booksModel.findall({where:{user_id: request.user.id}});
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
//Wishlist list - following should list all Books in wishlist
exports.listWishBooks = async (request, response) => {
    try {
        let wishBookDetails = [];
        const wishBooks = await user2WishlistModel.findall({where:{user_id: request.user.id}});
        for (let index = 0; index < wishBooks.length; index++) {
            const element = books[index];
            wishBookDetails.push(element)
        }
        response.status(218).send(wishBookDetails);
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
}

//dont need this - //Update - Change this to update user details 
// exports.updateAuthor = async (request, response) => {
//     try {
//         await Books.updateOne({title: request.body.title}, {author: request.body.author}),
//         response.send({msg: `Author updated for ${request.body.title}`});
//     } catch (error) {
//         console.log(error);
//         response.status(401).send({error: error.message});
//     };
// };

//following should Delete selected book from users database/table - to be done!
  
exports.deleteBooks = async (request, response) => {
    try {
        const deletedBooks = await booksModel.deleteOne({title: request.body.title});
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
}
//following should delete book from wishlist table/databse - to be done!

exports.deleteWishBooks = async (request, response) => {
    try {
        const deletedWishBooks = await wishlistModel.deleteOne({title: request.body.title});
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
}

