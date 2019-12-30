const express = require('express')
const router = express.Router()
const us=require('../models/user_Schema')
const ms=require('../models/merc_Schema')

router.post('/',(req,res)=>
{
    //res.send("Loggedin")
    if(req.body.type==="merc")
        var db = ms
    else
        var db = us

    db.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>0)
            {
                if(user[0].password===req.body.password)
                    if(user[0].type===req.body.type)
                        res.send("Loggedin").status(200)
                    else
                        res.send("Wrong user type")
                else
                    res.send("Wrong password")
            }
        else
            res.send("Wrong email")
    })



}) 



module.exports = router