const AmsPartner = require("../../Models/Organization/Model-AmsParner");

const Organizaation = require("../../Models/Organization/Model-Organization");

// creat ams partner Data
const createAms = async (req, res, next) => {
  const { legalname } = req.body;

  let legalnamecheck = await Organizaation.findOne({ legalname });
  if (legalnamecheck == null) {
    return res
      .status(500)
      .json({ message: "No legal not found", legalnamecheck });
  }

  let ams;

  try {
    ams = new AmsPartner({
      legalname: req.body.legalname,
      partner_name: req.body.partner_name,
      ams_expire_month_year: req.body.ams_expire_month_year,
      partner_additional_info_1: req.body.partner_additional_info_1,
      partner_additional_info_2: req.body.partner_additional_info_2,
    });
    await ams.save();
  } catch (error) {
    return console.log(error);
  }

  if (!ams) {
    return res.status(500).json({ message: `Unable to Create AMS Detailes` });
  }

  return res.status(201).json({ message: `Succesfuly Created`, ams });
};

//  getall ams partner detailes

const getAmspartnerDetailes = async (req, res, next) => {
  let ams;

  try {
    ams = await AmsPartner.find();
  } catch (error) {
    return console.log(error);
  }

  if (!ams) {
    return res.status(404).json({ message: "Unable to create AMS " });
  }

  return res.status(200).json({ message: `All AMS PARTNER DETAILES`, ams });
};



// get ams id detailes
const getbyidams = async(req,res,next) =>{

let ams;

let id = req.params.id
    try {
        ams = await AmsPartner.findOne({_id:id})
    } catch (error) {
        console.log(error)
    }

    if(!ams){
        return res.status(201).json({message:'Unable to Display the Data'})
    }
    return res.status(200).json({message:`Get by ${id} AMS DETAILES`,ams})
}




// update the ams partner id 

const amspartnerUpdate = async(req,res,next) =>{
    let ams ;
    const id = req.params.id;

    try {
        
ams = await AmsPartner.findById(id,{
    legalname: req.body.legalname,
    partner_name: req.body.partner_name,
    ams_expire_month_year: req.body.ams_expire_month_year,
    partner_additional_info_1: req.body.partner_additional_info_1,
    partner_additional_info_2: req.body.partner_additional_info_2,
})

    } catch (error) {
        return console.log(error)
    }

    if(!ams){
        return res.status(404).json({message:`Unablr to Update the ${id}`})
    }

    return res.status(200).json({message:`Succesfully Update the ${id}`,ams})
}




//  delete ams detailes


const deleteamspartner = async(req,res,next) =>{

    let ams;
    
    let id = req.params.id
        try {
            ams = await AmsPartner.findByIdAndDelete(id)
        } catch (error) {
            console.log(error)
        }
    
        if(!ams){
            return res.status(201).json({message:`Unable to Display the Data ${id}`})
        }
        return res.status(200).json({message:`Succesfully Deleted ${id} AMS DETAILES`,ams})
    }
    

    




















// creat ams partner Data
exports.createAms = createAms;

// all ams Parrtner detailes

exports.getAmspartnerDetailes = getAmspartnerDetailes;


//  get by ams partner data

exports.getbyidams = getbyidams


// delete ams partner detailes

exports.deleteamspartner = deleteamspartner

// ams update 
exports.amspartnerUpdate = amspartnerUpdate