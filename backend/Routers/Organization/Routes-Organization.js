const express = require("express")

const router = express.Router()

const OrganizationContollerfile = require("../../Controller/Organizaation/Controller-Organization")

router.post('/create',OrganizationContollerfile.CreateOrganization);
router.get('/all',OrganizationContollerfile.alldetailesOrganization)
router.get('/:id',OrganizationContollerfile.getOrganizationOne)
router.put("/:id",OrganizationContollerfile.updateOrganization)
router.delete("/:id",OrganizationContollerfile.deleteOrganizationOne)

router.get("/get/:legalname/:industrysector",OrganizationContollerfile.legalandOrganaization)
router.get("/get/:legalname",OrganizationContollerfile.getByLegalname)

router.get("/get/:legalname/:industrysector/:address",OrganizationContollerfile.getbylegal_industry_address)


module.exports = router
