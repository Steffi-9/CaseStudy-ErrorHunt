const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    
    var newuser = {
        // "uid":req.param("uid"),
        // "pwd":req.param("pwd")
         uid:req.query.uid,//changed param(uid) to query.uid
        pwd:req.query.pwd //changed param(pwd) to query.pwd
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;