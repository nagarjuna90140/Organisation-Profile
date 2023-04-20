const Registration = require("../../Models/Registration/Model-Registration");

const userRegistrationPost = async (req, res, next) => {
  let register;
  const { name, email, role, phonenumber, password } = req.body;
  try {
    register = new Registration({
      name,
      email,
      role,
      phonenumber,
      password,
    });

    await register.save();
    res.status(201).json({ message: "Successfully Saved Data", register });
  } catch (error) {
    return console.log(error);
  }

  if (!register) {
    return res.json({ message: "Unable to Saved Registration.." });
  }

  return res
    .status(201)
    .json({ message: "Succefully Created Registration", register });
};

const getAllRegistration = async (req, res, next) => {
  let register;
  try {
    register = await Registration.find();
  } catch (error) {
    return console.log(error);
  }

  if (!register) {
    return res
      .status(500)
      .json({ message: "Unable to Get Registration All Detailes" });
  }
  return res
    .status(200)
    .json({ message: "All Registrtion Detailes......", register });
};

const getOneRegistration = async (req, res, next) => {
  let register;
  const id = req.params.id;
  try {
    register = await Registration.findById(id);
  } catch (error) {
    return console.log(error);
  }

  if (!register) {
    return res.json(404).json({ message: "Unable to Get ID " });
  }

  return res
    .status(200)
    .json({ message: `Selected id Displayed ${id}`, register });
};

const DeleteRegistraionOne = async (req, res, next) => {

  const id = req.params.id;
  let register;
  try {
    register = await Registration.findByIdAndDelete(id);
  } catch (error) {
    return console.log(error);
  }

  if (!register) {
    return res
      
      .status(404)
      .json({ message: "Unable to Delete Register id ", register });
  }

  return res
    .status(200)
    .json({ message: `Succesfully Delted ${id}` }, register);
};


const updateRegistration = async(req,res,next) =>{
  let register ;
  const id = req.params.id;
  const{name,email,password,role,phonenumber} = req.body;
 

  try {
    register = await Registration.findByIdAndUpdate(id,{name,email,password,role,phonenumber})
    register = await register.save();
  } catch (error) {
    
    console.log(error)
  }

  if(!register){
    res.status(500).json({message:`Unlble to Update The ${id} Detailes`})
  }

  return res.send(register) .status(200).json({register})
}





















exports.userRegistrationPost = userRegistrationPost;

exports.getAllRegistration = getAllRegistration;
exports.getOneRegistration = getOneRegistration;
exports.DeleteRegistraionOne = DeleteRegistraionOne

exports.updateRegistration = updateRegistration