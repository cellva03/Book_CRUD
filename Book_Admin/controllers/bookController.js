const Book = require('../models/bookModel');

let updateBook = [];

const renderBookPage = (req,res)=>{
    Book.find({})
    .then((books)=>{
        res.render('book',{books})
    })
}

const deleteBook = (req,res)=>{
    const id = req.params.id;
    Book.findByIdAndDelete({ _id: id })
    .then((user)=>{ 
        res.send({"user": "Book has been deleted😥"})
    })

}

const renderUpdateBookPage = async(req,res)=>{
    await res.render('update_book',{books: updateBook})
 }

const renderAddBookPage = (req,res)=>{
    res.render('add_book')
}

const addNewBook = (req,res)=>{
    const book = new Book(req.body);
    // console.log(req.body);
    book.save()
        .then((result)=>{
            // console.log(result)
            res.redirect('/dashboard/books')
        })
        .catch((e)=>{
            console.log(e);
        })
}

const putUpdatedBook = (req,res) =>{
    const id = req.body.id;
    // console.log(id)
    Book.findByIdAndUpdate(id,{title : req.body.title, authors : req.body.authors, pageCount : req.body.pageCount,thumbnailUrl : req.body.thumbnailUrl,categories : req.body.categories,publishedDate : req.body.publishedDate})
    .then((result)=>{
        res.redirect('/dashboard/books')
        // res.send({"user": "User has been updated 😎"})
    })
    .catch((e)=>{
        console.log(e);
    })
}

const getUpdatedBook = (req,res)=>{
    const id = req.params.id;
    // console.log(id);
    Book.findById(id)
    .then((book)=>{
        // console.log(book)
        updateBook = book;
    })
}


module.exports = { renderBookPage, deleteBook, renderAddBookPage, addNewBook, putUpdatedBook, getUpdatedBook ,renderUpdateBookPage}