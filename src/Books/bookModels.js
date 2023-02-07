// const sequalize = require("sequalize")

const userSchema = new sequalize.Schema ({
  bookName:{
    type: String,
    required: true,
    unique: true
  },
  bookAuthor:{
    type: String,
    required: true,
    unique: true
  },

});
