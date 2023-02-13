
const {Sequelize} = new require("sequelize");
require ("dotenv").config();

const sequelize = new Sequelize(process.env.SQL_URI, {logging: false});

try {
    sequelize.authenticate();
    console.log("Succesfully connected to DB");
} catch(error) {
    console.log(error)
}

module.exports = sequelize;
