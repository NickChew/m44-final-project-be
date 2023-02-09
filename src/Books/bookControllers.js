
const users = require("./Books/users");

const users = require("../user/userModels");

const booksModel = require("./booksModel");
const users2booksModel = require("./users2booksModel");
const wishlistModel = require("./wishlistModel");
const user2WishlistModel = require("./user2WishlistModel");

//Add Book - need to change too add books to user books table in database - to be done!
exports.addBooks = async (request, response) => {
    console.log(request);
    try {

        const newBooks = await booksModel.create(request.body);
        const newaddBooks = await booksModel.create(request.body.bookID, request.body.title, request.body.authors, request.body.imageURL);

        //request.body should have userID + all book information + user_books extra info
        //first add books data to books table
        const newBooks = await booksModel.create(request.body.bookID, request.body.title, request.body.authors, request.body.imageURL);

        //second add UserID and bookID into user_books table also add in extra data into this table 
        const newUsers_Books = await users2booksModel.create(request.body.UserID, request.body.bookID);
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
        //const newWishBooks = await wishlistModel.create(request.body);
         //request.body should have userID + bookID + user_wish extra info
        //first add books data to books table
        const newBooks = await booksModel.create(request.body.bookID, request.body.title, request.body.authors, request.body.imageURL);
        
        //second add UserID and bookID into user_books table also add in extra data into this table 
        const newWishBooks = await wishlistModel.create(request.body.userID, request.body.bookID);
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

        //request will have userID, 
        //store all this user books info including IDs in JSON then loop through
        const userBooks = await users2booksModel.find({where: {ID: UserID}});
        //now loop through user booksID to show all information of this books
        const UserBooksDetails ={};// store this user books details into object
        for (let i=0; i< userBooks.length(); i++){
        const temp = await booksModel.find({where: {ID: userBooks[0].ID}});// find one book each iteration 
            UserBooksDetails.push(temp);// add it to the returned books object
        }
            
        response.status(218).send({ booksModel: UserBooksDetails });// return the books detail in JSON to be displaid

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
        //request will have userID + bookID, 
        
        //easily delete it from users_books ER table
        const deletedBooks = await users2booksModel.deleteOne({userID: request.body.title, userID : request.body.bookID});
            
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
        //request will have userID + bookID, 
        
        //easily delete it from users_wishBooks ER table
        const deletedBooks = await wishlistModel.deleteOne({userID: request.body.title, userID : request.body.bookID});
            
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

