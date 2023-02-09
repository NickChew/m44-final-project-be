use bujikvlrqmfk8m2mdjst;

create table users(
	ID INT NOT NULL UNIQUE AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    PRIMARY KEY(ID)
    );
SHOW TABLES;
SELECT * from users;
commit; 
DROP table users2books;

CREATE TABLE booksModel (
                    google_id VARCHAR(11) unique primary key not null,
                    ISBN_10 DECIMAL(10,0),
                    ISBN_13 DECIMAL(13,0),
                    AUTHOR VARCHAR(255) NOT NULL,
                    TITLE VARCHAR(255) NOT NULL
                    );

CREATE TABLE users2booksModel (
                    user_ID INT NOT NULL,
                    google_book_ID VARCHAR(11) NOT NULL,
                    PRIMARY KEY (user_ID, google_book_ID)
                    );

CREATE TABLE wishlistModel (
                    user_ID int not null,
                    google_book_ID VARCHAR(11) not null,
                    PRIMARY KEY (user_ID, google_book_ID)
                    );
				