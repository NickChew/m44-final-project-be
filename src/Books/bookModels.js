const sequalize = require("sequalize")

const userSchema = new sequalize.Schema ({
  bookTitle:{
    type: String,
    required: true,
    unique: true
  },
  bookAuthor:{
    type: String,
    required: true,
    unique: true
  },
  bookImage:{
    type: Image,
    required:false,
    unique: false
  },
  bookISBN:{
    type: Number,
    required:true,
    unique:true,
    match: /^\d{9}[\dX]$/,
    match: /^\d{13}$/
  },
});
