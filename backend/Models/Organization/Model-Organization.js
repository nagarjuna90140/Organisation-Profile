const mongoose = require("mongoose")

const userOrganization = mongoose.Schema({
    legalname:{
        type:String,
      
    },


    groupname:{
        type:String,
      
    },

    ermname:{
        type:String,
      
    },


    industrysector:{
        type:String,
      
    },

    noofemployees:{
        type:String,
      
    },


    
    turnoverrange:{
        type:String,
      
    },


    turnovervalue:{
        type:String,
      
    },


    
    websiteurl:{
        type:String,
      
    },



    
    orgemail:{
        type:String,
      
    },

    
    phonenumber:{
        type:String,
      
    },

    
    address:{
        type:String,
     
    },

    
    organization_aditional_info:{
        type:String,
     
    },


    
    erpvender:{
        type:String,
     
    },


    selector_year:{
        type:String,
     
    },


    
    additional_info:{
        type:String,
      
    },

    


})

module.exports = mongoose.model("Organization",userOrganization)