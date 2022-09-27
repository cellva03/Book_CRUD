const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bookSchema = new schema({
    title: String,
    pageCount: Number,
    publishedDate: String,
    thumbnailUrl: String,
    status: String,
    authors: String,    
    categories: String,
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;