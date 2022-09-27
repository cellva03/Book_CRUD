const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.post('/register', adminController.registerAdmin)

router.post('/login',adminController.loginAdmin)

module.exports = router;