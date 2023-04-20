const express = require("express")

const router = express.Router()


const amspartner = require("../../Controller/Organizaation/Controller-AmsPartner");
const { route } = require("./Routes-BussinessOrganization");




router.post("/create",amspartner.createAms);

router.get("/allams",amspartner.getAmspartnerDetailes)

router.get('/:id',amspartner.getbyidams)

router.delete('/:id',amspartner.deleteamspartner)

router.put('/:id',amspartner.amspartnerUpdate)
module.exports = router