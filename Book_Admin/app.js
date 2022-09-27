const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/adminRoute');
const userRouter = require('./routes/userRoute');
const bookRouter = require('./routes/bookRoute');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8000;
const dbURI = 'mongodb://0.0.0.0:27017/bookess';


app.set('view engine', 'ejs');
app.set('views', path.resolve(path.join(__dirname, 'views'))); 
app.use(express.static( __dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('DataBase Connected');
        app.listen(PORT,()=>{
            console.log(`Server Running on Port ${PORT}`);
        });
    }
})

app.get('/',(req,res)=>{
    res.redirect('/login')
})

app.get('/dashboard',(req,res)=>{
    res.redirect('/dashboard/users')
})

app.get('/register',(req, res)=>{
    res.render('register');
})

app.get('/login',(req, res)=>{
    res.render('login');
})

app.use(adminRouter)
app.use(userRouter)
app.use(bookRouter)
