

const express = require("express")
const router = express.Router()

const BussinessOpertunity = require("../../Controller/Organizaation/Controller-BussinessOpertunity")



router.post('/createbessiness',BussinessOpertunity.createbussiness)
router.get('/',BussinessOpertunity.getallbussinessDetailes)
router.get('/oneid/:software_technology',BussinessOpertunity.getbussinessOne)
router.put('/:id',BussinessOpertunity.bussinessUpdate)
router.delete('/:id',BussinessOpertunity.bussinessDelete)
// search
router.get('/getsftware/:software_technology/',BussinessOpertunity.bussinessSearch)
router.get('/type/:software_technology/:opertunity_type',BussinessOpertunity.bussinesssoftwareopertunity)

router.get(`/opertype/:opertunity_type`,BussinessOpertunity.bussinessopertunitype)

module.exports = router



