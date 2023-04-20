const mongoose = require("mongoose")


const IndustrySchema = mongoose.Schema({
    industrysector:{
        type:String,
        
    }
})


module.exports = mongoose.model("INDUSTRY",IndustrySchema)