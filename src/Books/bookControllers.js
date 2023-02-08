const Books = require("./booksModel");

//Create
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
//list all books
exports.listBooks = async (request, response) => {
    try {
        const books = await Books.find({});
        response.status(218).send({ allBooks: books });
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
}

//Update
exports.updateAuthor = async (request, response) => {
    try {
        await Books.updateOne({title: request.body.title}, {author: request.body.author}),
        response.send({msg: Author updated for ${request.body.title}});
    } catch (error) {
        console.log(error);
        response.status(401).send({error: error.message});
    };
};

//Delete
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