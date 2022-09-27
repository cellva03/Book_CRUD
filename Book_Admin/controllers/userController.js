const User = require('../models/userModel');

let updateUsers = [];


const renderUserPage = (req,res)=>{
    User.find({})
    .then((users)=>{
        res.render('index',{users: users})
    })
}

const deleteUser = (req,res)=>{
    const id = req.params.id;
    User.findByIdAndDelete({ _id: id })
    .then((user)=>{ 
        res.send({"user": "User has been deleted😥"})
    })

}

const addNewUser = (req,res)=>{
    const user = new User(req.body);
    // console.log(req.body);
    user.save()
        .then((result)=>{
            // console.log(result)
            res.redirect('/dashboard/users')
        })
        .catch((e)=>{
            console.log(e);
        })
}

const updateUser = (req,res) =>{
    const id = req.body.id;
    // console.log(id)
    User.findByIdAndUpdate(id,{name : req.body.name, email : req.body.email})
    .then((result)=>{
        res.redirect('/dashboard/users')
        // res.send({"user": "User has been updated 😎"})
    })
    .catch((e)=>{
        console.log(e);
    })
}

const getUpdatedUser = (req,res)=>{
    const id = req.params.id;
    // console.log(id);
    User.findById(id)
    .then((user)=>{
        updateUsers = user;
    })
}

const renderUpdateUserPage = (req,res)=>{
    res.render('update_user',{users: updateUsers})
}

module.exports = {renderUserPage, deleteUser, addNewUser, updateUser, getUpdatedUser, renderUpdateUserPage}