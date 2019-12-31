const express = require('express')
const router= express.Router()
const ss = require('../models/subs_Schema')

router.post('/',(req,res)=>{
    //console.log(req)
    const newuser = new ss({
        subscription_type:req.body.name
    })

    newuser.save();
    console.log("Got a Message")
    res.send("Thank You. Your Subscription has been applied.")

})
module.exports =router