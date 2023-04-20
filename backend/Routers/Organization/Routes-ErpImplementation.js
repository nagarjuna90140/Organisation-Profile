const express = require("express")

const router = express.Router()


const ErpImplementation = require("../../Controller/Organizaation/Controller-ErpImplementation");





router.post("/create",ErpImplementation.createErpImplement);

router.get("/allerp",ErpImplementation.getAllErpImplementationDetailes)

router.get('/:id',ErpImplementation.getErpImplememntationId)

router.delete('/:id',ErpImplementation.deleteErpImplementation)

router.put('/:id',ErpImplementation.ErpImplementUpdate)


module.exports = router