const User = require('../models/userModel');
const Book = require('../models/bookModel');

let currentUser = '';
let likedBook = [];
let readBook = [];

const registerUser = (req, res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    // console.log(user);
    user.save()
        .then((result)=>{
            // console.log(result);
            res.send({"user": "Your Now Registered User"});
        })
        .catch((err)=>{
            console.log(err);
            res.send({"error": "The Email is already in use"})
        })
    }

const loginUser =(req, res)=>{
    User.findOne({email: req.body.email , password: req.body.password})
        .then((user)=>{ 
            // console.log(user)
            if(user){
                currentUser = user._id;
                // console.log(currentUser)
                // res.render('dashboard',{books: []});
                return res.send({"user": "logged in"})
            }
            else{
                res.send({"error": "Email is incorrect or not registered"})
            }
            })
}


const setLikedBook =  (req, res) => {
    const id = req.params.id;
    Book.findById(id)
        .then((bookss) => {
            const addedBook = [bookss];
            likedBook = [...likedBook, ...addedBook];
            // console.log(currentUser)
            User.findOneAndUpdate({"_id":currentUser},{"$set":{"likedBook":likedBook}})
            .then((user)=>{
                // console.log(user)  
            })    
        })
}

const setReadBook =  (req, res) => {
    const id = req.params.id;
    Book.findById(id)
        .then((bookss) => {
            const addedBook = [bookss];
            readBook = [...readBook, ...addedBook];
            // console.log(currentUser)
            User.findOneAndUpdate({"_id":currentUser},{"$set":{"readBook":readBook}})
            .then((user)=>{
                // console.log(user)  
            })     
        })
}

const renderLikedBook = (req, res)=>{
    User.findById(currentUser)
    .then((user) => {
        // console.log(user.likedBook)
        res.render('liked', {bookss: user.likedBook});
    })
}

const renderReadBook = (req, res)=>{
    User.findById(currentUser)
    .then((user) => {
        // console.log(user.likedBook)
        res.render('readlater', {bookss: user.readBook});
    })
}

module.exports = {registerUser,loginUser,setLikedBook,renderLikedBook,setReadBook,renderReadBook};