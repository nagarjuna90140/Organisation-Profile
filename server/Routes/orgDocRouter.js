// const express = require("express")
// const orgDocModel = require("../Model/ManageOrgModel")
// const fileUpload=require("express-fileupload")
// const {orgDocSingle}=require("../controllers/orgDocController")
// const router = express.Router()
// const path=require("path")

// router.post("/create",orgDocSingle)

// module.exports = router


const orgDocModel = require("../Model/ManageOrgModel")
// var multer = require('multer');
// const express = require("express")
// const router = express.Router()
// const path=require("path")

// var storage=multer.diskStorage({
//   destination:function(req,file,cb){
//     cb(null,"uploads/")
//   },
//   filename:function(req,file,cb){
//     let ext=path.extname(file.originalname)
//     cb(null,Date.now()+ext)
//   }
// })

// var upload=multer({
//   storage:storage,
//   fileFilter:function(req,file,callback){
//     if(file.mimetype=="image/png" || file.mimetype=="image/jpg"){
//       callback(null,true)
//     }else{
//       console.log("only jpg and png files are supported")
//       callback(null,false)
//     }
//   },
//   limits:{
//     fileSize:1024*1024*2
//   }
// })
const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), (req, res) => {
  // req.file contains information about the uploaded file
  res.send('File uploaded successfully');
});

//router.post("/create",upload.single("file"))

module.exports=router






