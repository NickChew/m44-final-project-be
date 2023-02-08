
// user model is the same like what we got from the lessos
// no need for ID as it is AUTOMATICALLY CREATED by mySQL 
// we will get userID when needed via userID= Users.findOne (name : requestAnimationFrame.body.name););
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+$/
    },
    password: {
        type: String,
        required: true,
        unique: false,
        match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    }
})

const User = mongoose.model("user", userSchema);

module.exports = User;