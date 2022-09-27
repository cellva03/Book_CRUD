const router = require('express').Router();
const { renderUserPage,
        deleteUser,
        addNewUser, 
        updateUser,
        getUpdatedUser, 
        renderUpdateUserPage} = require('../controllers/userController');

router.get('/dashboard/users',renderUserPage    )

router.delete('/dashboard/users/:id',deleteUser)

router.get('/dashboard/add-user',(req,res)=>{
    res.render('add_user')
})

router.post('/dashboard/add-user',addNewUser)

router.get('/dashboard/update-user',renderUpdateUserPage)

router.post('/dashboard/update-user',updateUser)

router.get('/dashboard/update-user/:id',getUpdatedUser)

module.exports = router;