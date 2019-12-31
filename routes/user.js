const express = require('express')
const router = express.Router()
const ms= require('../models/merc_Schema')

router.post('/',(req,res)=>
{
    //res.send("User Dashboard")
    ms.find({city:req.body.city,domain:req.body.domain})
    .exec()
    .then(user=>{
        if(user.length>0)
              {  //console.log(user)
                  var c=[];
                for(i=0;i<user.length;i++)
                    {if(user[i].price<=req.body.price)
                        c[i]=(user[i].name+":"+user[i].phno+":" + user[i].price )
                    }
                //console.log(c.length)    
                if(c.length!=0)
                    res.send(c)
                else
                    res.send("none")
                }
            
        else
            {//console.log(user)
                res.send("none")}
    })




}) 


module.exports = router