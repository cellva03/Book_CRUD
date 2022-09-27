const Admin = require('../models/adminModel')

const loginAdmin = (req, res)=>{
    Admin.findOne({email: req.body.email , password: req.body.password})
        .then((user)=>{ 
            // console.log(user)
            if(user){
                // res.render('dashboard',{books: []});
                return res.send({"user": "logged in"})
            }
            else{
                res.send({"error": "Email is incorrect or not registered"})
            }
            })
}

const registerAdmin = (req, res)=>{
    const user = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    // console.log(user);
    user.save()
        .then((result)=>{
            res.send({"user": "Your Now Registered admin"});
        })
        .catch((err)=>{
            console.log(err);
            res.send({"error": "The Email is already in use"})
        })
    }

module.exports ={ loginAdmin, registerAdmin}