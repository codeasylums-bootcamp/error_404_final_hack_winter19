const mongoose = require('mongoose')

const ci=mongoose.Schema({
    //id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    email:{type:String,required:true},
    mess:{type:String,required:true}

})

module.exports = mongoose.model('contactinfo',ci)