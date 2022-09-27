const router = require('express').Router();
const { renderBookPage,
        deleteBook, 
        renderAddBookPage, 
        addNewBook, 
        putUpdatedBook,
        renderUpdateBookPage, 
        getUpdatedBook } = require('../controllers/bookController');


router.get('/dashboard/books',renderBookPage);

router.delete('/dashboard/books/:id',deleteBook)

router.get('/dashboard/add-book',renderAddBookPage)

router.post('/dashboard/add-book',addNewBook)

router.get('/dashboard/update-book',renderUpdateBookPage)

router.post('/dashboard/update-book',putUpdatedBook)

router.get('/dashboard/update-book/:id',getUpdatedBook)

module.exports = router;