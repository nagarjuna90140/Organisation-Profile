const express = require("express")

const router = express.Router()

const ErpVender = require("../../Controller/Organizaation/Controller-ERPVender")

router.post('/',ErpVender.CreateErp);
router.get('/all',ErpVender.allErpDetailes)
router.get('/:id',ErpVender.getErpdOne)
router.put("/:id",ErpVender.updateErp)
router.delete("/:id",ErpVender.deleteErp)

module.exports = router
