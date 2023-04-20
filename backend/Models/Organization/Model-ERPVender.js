const mongoose = require("mongoose")


const Erdvender = mongoose.Schema({
    erpvender:{
        type:String,
       
    }
})


module.exports = mongoose.model("ERPVENDER",Erdvender)