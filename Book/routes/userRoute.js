const router = require('express').Router();
const userController = require('../controllers/userController');


router.post ('/user/register',userController.registerUser);

router.post('/user/login',userController.loginUser);

router.get('/dashboard/liked/:id', userController.setLikedBook);

router.get('/liked',userController.renderLikedBook);

router.get('/dashboard/read/:id',userController.setReadBook);

router.get('/readlater',userController.renderReadBook);



module.exports = router;