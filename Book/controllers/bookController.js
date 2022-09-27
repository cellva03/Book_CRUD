const Book = require('../models/bookModel');

const getAllBooks = (req, res) => {
    Book.find({})
        .then((books) => {
            res.render('index', { books });
        })       
        .catch((err) => { console.log(err); })
}

const getDashboard =  (req, res) => {
    Book.find({})
        .then((books) => {
            res.render('dashboard', { books });
        })       
        .catch((err) => { console.log(err); })
}

module.exports = {getAllBooks,getDashboard};