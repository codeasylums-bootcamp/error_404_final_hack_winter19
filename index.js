const express = require('express')
const mongoose = require('mongoose')
const port =3000
const parser = require('body-parser');

const user_signup= require('./auth/user_signup')
const merc_signup= require('./auth/merc_signup')
const login= require('./auth/login')
const user= require('./routes/user')
const cont= require('./routes/cont')
const subs= require('./routes/subs')
mongoose.connect("mongodb+srv://xxx:yyy@cluster0-718ce.mongodb.net/user?retryWrites=true&w=majority");


const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');

        next();    
        
        });

app.get('/',(req,res)=>{
    res.send("Home")
})

app.use('/usersignup',user_signup)
app.use('/mercsignup',merc_signup)
app.use('/login',login)
app.use('/user',user)
app.use('/cont',cont)
app.use('/subs',subs)





app.listen(port,()=>
{
    console.log("Server Runnning on port: "+port)
})
