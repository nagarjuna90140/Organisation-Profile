const express=require("express")
const mongoose=require("mongoose")
const userRoutes=require("./routes/userRoutes")
const industryRoutes=require("./routes/industryRoutes")
const erpVendorRoutes=require("./routes/erpVendorRoutes")
const orgRoutes=require("./Routes/orgRoutes")
const orgContact=require("./Routes/orgContact")
const erpPartner=require("./Routes/erpPartner")
const amsPartner=require("./Routes/amsPartnerRouter")
const businessPartner=require("./Routes/businessRouter")
const sofTechRouter=require("./Routes/softTechRouter")
const orgDocRouter=require("./Routes/orgDocRouter")
const dotenv=require("dotenv")
const app=express()
 
dotenv.config()
app.use(express.json())
app.use("/user",userRoutes)
app.use("/industry",industryRoutes)
app.use("/erpVendor",erpVendorRoutes)
app.use("/organisation",orgRoutes)
app.use("/orgContact",orgContact)
app.use("/erpPartner",erpPartner)
app.use("/amsPartner",amsPartner)
app.use("/business",businessPartner)
app.use("/software",sofTechRouter)
app.use("/orgDocument",orgDocRouter)



mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/",
  {
    dbName: "Zettamine",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

);
// app.get("/get/By/Query",async(req,res)=>{
 
//   try {
//     const Personname=req.query.name
//     const email=req.query.email
//     res.json({name:Personname})
//   console.log(Personname)
//   console.log(email)
//   } catch (error) {
//     console.log("error")
//   }
  
//   })


app.listen(5050,(req,res)=>{
    console.log("server running at 5050")
})