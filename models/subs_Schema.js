const mongoose = require('mongoose')

const si=mongoose.Schema({
    //id:mongoose.Schema.Types.ObjectId,
    subscription_type:{type:String,required:true}
})

module.exports = mongoose.model('subsinfo',si)