const router = require('express').Router();
const bookController = require('../controllers/bookController');

router.get('/user', bookController.getAllBooks);

router.get('/dashboard', bookController.getDashboard);

module.exports = router;