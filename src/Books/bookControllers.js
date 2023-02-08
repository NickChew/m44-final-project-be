const users2booksModel = require("./booksModel");
const users = require("./users");

//Add Book - need to change too add books to user table in database - to be done!
exports.addBooks = async (request, response) => {
    console.log(request);
    try {
        const newBooks = await Books.create(request.body);
        response.status(200).send({ books: newBooks });
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
        response.status(200).send({ books: newBooks });
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
}

//list - change too list users books in database and or list wishList books - to be done!
exports.listBooks = async (request, response) => {
    try {
        const books = await Books.find({});
        response.status(218).send({ allBooks: books });
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
//  
exports.deleteBooks = async (request, response) => {
    try {
        const deletedBooks = await Books.deleteOne({title: request.body.title});
        if (deletedBooks.deletedCount > 0) {
            response.status(200).send({ movie: deletedBooks });
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
exports.deleteBooks = async (request, response) => {
    try {
        const deletedBooks = await Books.deleteOne({title: request.body.title});
        if (deletedBooks.deletedCount > 0) {
            response.status(200).send({ movie: deletedBooks });
        }
        else {
            throw new Error("Did not delete.");
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ error: error.message });
    }
}