use bujikvlrqmfk8m2mdjst;

SHOW TABLES;
SELECT * from users;
SELECT * from booksModel;
SELECT * from users2booksModel;
SELECT * from user2WishlistModel;
SELECT * from wishlistModel;

DESCRIBE users;
DESCRIBE booksModel;
DESCRIBE users2booksModel;
DESCRIBE user2WishlistModel;
DESCRIBE wishlistModel;
commit; 

DROP table users;
CREATE TABLE users(
	user_ID INT NOT NULL UNIQUE AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    PRIMARY KEY(user_ID)
    );
    
DROP table booksModel ;
CREATE TABLE booksModel (
                    google_ID VARCHAR(12) UNIQUE PRIMARY KEY NOT NULL,                   
                    ISBN DECIMAL(13,0),
                    author VARCHAR(255) NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    thumbnail VARCHAR(255),
                    description VARCHAR(2047),
                    category VARCHAR(255),
                    selflink VARCHAR(255),
                    publishDate DATE
                    );
                    
DROP table users2booksModel ;
CREATE TABLE users2booksModel (
                    user_ID INT NOT NULL,
                    google_ID VARCHAR(12) NOT NULL,
                    PRIMARY KEY (user_ID, google_ID)
                    );
                    
DROP table user2WishlistModel ;                
CREATE TABLE user2WishlistModel (
                    user_ID INT NOT NULL,
                    google_ID VARCHAR(12) NOT NULL,
                    PRIMARY KEY (user_ID, google_ID)
                    );                    
