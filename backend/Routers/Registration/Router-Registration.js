const express = require("express");
const router = express.Router();

const ControllerRegistration = require("../../Controller/Registration/Controller-Registration");

router.post("/", ControllerRegistration.userRegistrationPost);
router.get("/", ControllerRegistration.getAllRegistration);
router.get("/:id",ControllerRegistration.getOneRegistration)
router.delete("/:id",ControllerRegistration.DeleteRegistraionOne)
router.put("/:id",ControllerRegistration.updateRegistration)

module.exports = router;
