const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: [3, "Name need at least 3 characters!"]},
  quotes: [{type: String, required: true, minlength: [3, "Quotes need 3 characters or more"]}],
  }, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);
// 

module.exports = Author;