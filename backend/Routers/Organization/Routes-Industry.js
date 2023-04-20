const express = require("express")

const router = express.Router()

const Industry = require("../../Controller/Organizaation/Controller-Industry")

router.post('/',Industry.IndustryCreate);
router.get('/all',Industry.getAllIndustry)


// router.get('/all',ErpVender.allErpDetailes)
// router.get('/:id',ErpVender.getErpdOne)
// router.put("/:id",ErpVender.updateErp)
// router.delete("/:id",ErpVender.deleteErp)

module.exports = router
