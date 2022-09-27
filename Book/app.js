const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/bookRoute');
const userRouter = require('./routes/userRoute');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const dbURI = 'mongodb://0.0.0.0:27017/bookess';



app.set('view engine', 'ejs');
app.set('views', 'views');
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
    res.redirect('/user')
})

app.get('/register',(req, res)=>{
    res.render('register');
})

app.get('/login',(req, res)=>{
    res.render('login');
})

app.use(bookRouter);

app.use(userRouter);